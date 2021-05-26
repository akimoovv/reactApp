import React, {useEffect, useState} from "react";
import Users from "./Users";
import {Route, BrowserRouter} from "react-router-dom";
import EditUser from "./EditUser";
import StartPage from "./StartPage";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import axios from "axios";


const App = (props) => {
    axios.defaults.withCredentials = true;

    const url = 'http://localhost:8080/myapp/api/v1/users/';
    const logoutUrl = 'http://localhost:8080/myapp/api/v1/auth/logout';

    const [isAuth, setAuth] = useState(false);

    const checkAndSetAuth = () => {
        axios.get(url + 'validate', {withCredentials: true})
            .then(response => {
                console.log(response.status);
                setAuth(true)
            }).catch(() => {setAuth(false)})
    }

    const logoutReq = () => {
        axios.post(logoutUrl, {withCredentials : true})
            .then(resp => {
                setAuth(false);
            }).catch();
    };

    useState(() => {
        checkAndSetAuth();
    }, [isAuth])

    return (
        <BrowserRouter>
        <div>
            <ul>
                <li><a href="/">Стартовая страница</a></li>
                <li><a href="/showUsers">Пользователи</a></li>
                {!isAuth ? <li><a href="/logIn">Войти в систему</a></li> : ""}
                {!isAuth ? <li><a href="/signUp">Регистрация</a></li> : ""}
            </ul>

            <Route exact path = '/' component = {StartPage}/>
            <Route path = '/showUsers' component = {Users}/>
            <Route exact path = '/editUser/:id' component = {EditUser}/>
            <Route exact path = '/logIn' component = {LogIn}/>
            <Route exact path = '/signUp' component = {SignUp}/>
            <br/>
            <br/>
            <br/>
            <br/>
            {isAuth ? <button onClick={() => logoutReq()}>Выйти из системы</button> : ""}

        </div>
        </BrowserRouter>
    );
}




export default App;
