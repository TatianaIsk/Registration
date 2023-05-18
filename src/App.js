import './App.css';

import Username from './components/Username/Username'
import MainInfo from './components/MainInfo/MainInfo'
import Password from './components/Password/Password'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'

const App = (props) => {

    let userElements =
        props.username.map((username) => <Username name={username.name} id={username.id}/>)

    return (
        <div className="app">
            <div className="app-wrapper">
                { userElements }
                <MainInfo newNameText={props.newNameText}
                          newMiddleNameText={props.newMiddleNameText}
                          updateNewName={props.updateNewName}
                />
                <Password newPassword={props.newPassword}
                          repeatPassword={props.repeatPassword}
                />
                <PersonalInfo newPhone={props.newPhone}
                              newMail={props.newMail}
                />
            </div>
        </div>
    );
}

export default App;
