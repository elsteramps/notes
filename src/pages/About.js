import React from "react";
import {CSSTransition} from 'react-transition-group'
import Navbar from '../components/NavBar'

export const About = () => {
    return ( 
        <CSSTransition
        timeout={{
            enter: 500,
            exit: 200 
        }}
        classNames={'about'}
        >
        <>
        <Navbar/>

        <div className="jumbotron bg-light">
            <div className="container">
                <h1 className="display-4 pt-4">Hey everyone!</h1>
                <p className="lead">This is my first React project</p>
                <p>You can follow me on github: <a href="https://github.com/elsteramps">https://github.com/elsteramps</a></p>
            </div>
        </div>
        </>
        </CSSTransition>
    )
}