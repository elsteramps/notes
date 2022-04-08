import React, {useReducer} from "react";
import axios from "axios";
import {FireBaseContext} from "./fireBaseContext";
import { firebaseReducer } from "./firebaseReducer";
import {useAuth} from './AuthContext'
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, NOTE_DONE } from "../types";

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {

    const initialState = {
        notes: [],
        loading: false,
        done: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric' 
    }

    const today = new Date()

    const fetchNotes = async () => {

        showLoader();

        const res = await axios.get(`${url}/notes.json`)
        // console.log(res)

        if(res.data){
        const payload = Object.keys(res.data).map(key => {
           return {
               ...res.data[key],
               id: key
           }
        }   
       )
       dispatch ({type: FETCH_NOTES, payload})
    }
    }

    const addNote = async title => {
        const note = {
            title, 
            date: today.toLocaleDateString("en-EU", options),
            done: false
        }

        try{
            const res = await axios.post(`${url}/notes.json`, note)

            console.log('addNote', res.data)
            const payload = {
                ...note,
                id: res.data.name
            }

            dispatch({
                type: ADD_NOTE,
                payload
            })
        }
        
        catch (e) {
            throw new Error(e.message)
        }
    }

    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FireBaseContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FireBaseContext.Provider>
    )
}