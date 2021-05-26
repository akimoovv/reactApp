import React, {useEffect, useState} from "react";
import axios from "axios";



const SignUp = (props) => {

    axios.defaults.withCredentials = true;
    const signUpUrl = 'http://localhost:8080/myapp/api/v1/auth/signup';


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [role, setRole] = useState("");

    const singUp = () => {axios.post(signUpUrl, {
        withCredentials: true,
        email : email,
        password : password,
        name : name,
        age : age,
        role : role,
    }).then(response => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })};



    return (
        <div>
            <h2>Email: <input type="text" onChange={e => setEmail(email + e.nativeEvent.data)}/></h2>
            <h2>Password: <input type="text" onChange={e => setPassword(password + e.nativeEvent.data)}/></h2>
            <h2>Name: <input type="text" onChange={e => setName(name + e.nativeEvent.data)}/></h2>
            <h2>Age: <input type="text" onChange={e => setAge(age + e.nativeEvent.data)}/></h2>
            <h2>Role: <input type="text" onChange={e => setRole(role + e.nativeEvent.data)}/></h2>

            <button onClick={() => {
                singUp();
                window.location.href = '/';
            }}>Sign Up!</button>

            <button onClick={() => {
                window.location.href = '/';
            }}>Back</button>
        </div>
    );
}




export default SignUp;
