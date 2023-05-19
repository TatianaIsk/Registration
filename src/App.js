import './App.css';
import Registration from './components/Registration/Registration'
import React from "react";
import Username from "./components/Username/Username";

const App = (props) => {

    let registrationUsername =
        props.username.map((username) => <Username name={username.name} id={username.id}/>)

    return (
        <div className="app">
            <div className="app-wrapper">
                {registrationUsername}
                <Registration
                    newPhone={props.newPhone}
                    newMail={props.newMail}
                    newPassword={props.newPassword}
                    repeatPassword={props.repeatPassword}
                    newNameText={props.newNameText}
                    newMiddleNameText={props.newMiddleNameText}
                    updateNewName={props.updateNewName}
                    newCity={props.newCity}
                />
            </div>
        </div>
    );
}

export default App;
