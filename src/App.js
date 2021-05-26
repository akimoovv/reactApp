import React, {useEffect, useState} from "react";
import Users from "./Users";
import {Route, BrowserRouter} from "react-router-dom";
import EditUser from "./EditUser";
import StartPage from "./StartPage";


const App = (props) => {

    return (
        <BrowserRouter>
        <div>
            <ul>
                <li><a href="/">Стартовая страница</a></li>
                <li><a href="/showUsers">Пользователи</a></li>
            </ul>
            <Route exact path = '/' component = {StartPage}/>
            <Route path = '/showUsers' component = {Users}/>
            <Route exact path = '/editUser/:id' component = {EditUser}/>
        </div>
        </BrowserRouter>
    );
}




export default App;
