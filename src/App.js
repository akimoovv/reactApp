import React, {useEffect, useState} from "react";
import Users from "./Users";
import {Route, BrowserRouter} from "react-router-dom";
import EditUser from "./EditUser";
import StartPage from "./StartPage";
import LogIn from "./LogIn";
import SignUp from "./SignUp";


const App = (props) => {

    return (
        <BrowserRouter>
        <div>
            <ul>
                <li><a href="/">Стартовая страница</a></li>
                <li><a href="/showUsers">Пользователи</a></li>
                <li><a href="/logIn">Войти в систему</a></li>
                <li><a href="/signUp">Регистрация</a></li>
            </ul>
            <Route exact path = '/' component = {StartPage}/>
            <Route path = '/showUsers' component = {Users}/>
            <Route exact path = '/editUser/:id' component = {EditUser}/>
            <Route exact path = '/logIn' component = {LogIn}/>
            <Route exact path = '/signUp' component = {SignUp}/>
        </div>
        </BrowserRouter>
    );
}




export default App;
