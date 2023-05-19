import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App username={store._state.usernamePage.username}
         newNameText={store._state.usernamePage.newNameText}
         newMiddleNameText={store._state.mainPage.newMiddleNameText}
         newPassword={store._state.passwordPage.newPassword}
         repeatPassword={store._state.passwordPage.repeatPassword}
         newPhone={store._state.personalPage.newPhone}
         newMail={store._state.personalPage.newMail}
         newCity={store._state.mainPage.newCity}
    />
  </React.StrictMode>
);

reportWebVitals();
