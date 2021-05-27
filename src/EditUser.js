import React, {useEffect, useState} from "react";
import axios from "axios";

const EditUser = (props) => {

    const getUserByIdUrl = 'http://localhost:8080/myapp/api/v1/users/';
    const updateUserByIdUrl = 'http://localhost:8080/myapp/api/v1/users/';

    const [id, setId] = useState(props.match.params.id);

    const [isError, setError] = useState(false);

    const [user, setUser] = useState(-1);


    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);


    const [isSaved, setSaved] = useState(false);


    const getUserById = (id) => {
        axios.get(getUserByIdUrl + id).then(response => {
            let data = response.data;
            setUser(data);
        }).catch((error) => {
            setError(true);
        })
    };

    const updateUserById = (id) => {
        axios.put(updateUserByIdUrl + id, {
            withCredentials: true,
            email: email,
            name: name,
            age: age
        }).then(response => {
            console.log(response)
        }).catch((error) => {
            setError(true);
        })
    };


    useEffect(() => {
        getUserById(id);
    }, []);


    return (
        <div>
            {!isError ? <h2>Email: <input type="text"
                                          onChange={e => setEmail(e.toString())}
                /></h2>
                : <h1>404 not found</h1>}

            {!isError ? <h2>Name: <input type="text"
                                         onChange={e => setName(e.toString())}

                /></h2>
                : ""}

            {!isError ? <h2>Age: <input type="text"
                                        onChange={e => setAge(e.toString())}

                /></h2>
                : ""}

            {isSaved ? <h2>Saved!</h2> : ""}
            <button onClick={() => {
                updateUserById(id);
                setSaved(true);
            }}>Save
            </button>
            <button onClick={() => {
                updateUserById(id);
                window.location.href = '/showUsers';
            }}>Back
            </button>
        </div>
    );
}

export default EditUser;
