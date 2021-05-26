import React, {useEffect, useState} from "react";
import axios from "axios";



const LogIn = (props) => {

    const logInUrl = 'http://localhost:8080/myapp/api/auth/login';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const logIn = () => {axios.post(logInUrl, {
        withCredentials: true,
        email : "email@mail.com",
        password : "admin"
    }).then(response => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })};



    return (
        <div>
            <h2>Email: <input type="text" onChange={e => setEmail(e.toString())}/></h2>
            <h2>Password: <input type="password" onChange={e => setPassword(e.toString())}/></h2>

            <button onClick={() => {
                logIn();
                // window.location.href = '/';
            }}>Login</button>

            <button onClick={() => {
                window.location.href = '/';
            }}>Back</button>
        </div>
    );
}




export default LogIn;
