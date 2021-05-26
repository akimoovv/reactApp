import React, {useEffect, useState} from "react";
import axios from "axios";



const LogIn = (props) => {

    const url = 'http://localhost:8080/myapp/api/v1/auth/login';
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const logIn = () => {axios.post(url, {
        withCredentials: true,
        email : email,
        password : password
    }).then(response => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })};



    return (
        <div>
            <h2>Email: <input type="text" onChange={e => setEmail(email + e.nativeEvent.data)}/></h2>
            <h2>Password: <input type="password" onChange={e => setPassword(password + e.nativeEvent.data)}/></h2>

            <button onClick={() => {
                logIn();
            }}>Login</button>

            <button onClick={() => {
                window.location.href = '/';
            }}>Back</button>
        </div>
    );
}




export default LogIn;
