import './App.css';
import Registration from './components/Registration/Registration'
import React from "react";
import Username from "./components/Username/Username";

const App = (props) => {

    let registrationUsername =
        props.username.map((username) => <Username key={username.id} name={username.name} id={username.id} value={username}/>)

    return (
        <div className="app">
            <div className="app-wrapper">
                {registrationUsername}
                <Registration/>
            </div>
        </div>
    );
}

export default App;
