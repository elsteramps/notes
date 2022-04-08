
function MainPaige(props) {
    return (
    <FirebaseState>
        <AlertState>
        <BrowserRouter>
            <NavBar/>
        <div className="container pt-4">
            <Routes>
            <Route path={'/'} exact element = {<Home/>}/>
            <Route path={'/about'} element = {<About/>}/>
            </Routes>
        </div>
        </BrowserRouter>
        </AlertState>
    </FirebaseState>
    );
}

export default MainPaige;