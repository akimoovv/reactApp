import React, {useEffect, useState} from "react";
import axios from "axios";


const Users = () => {


    const url = 'http://localhost:8080/myapp/api/v1/users/';

    const [isAuth, setIsAuth] = useState(false);

    const [users, setUsers] = useState([]);

    const checkAndSetAuth = () => {
        axios.get(url + 'validate', {withCredentials: true})
            .then(response => {
                console.log(response.status);
                setIsAuth(true)
            }).catch(() => {setIsAuth(false)})
    }

    const deleteUser = (id) => {axios.delete(url + id, {withCredentials: true})
        .then(response => {
        getUsers();
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })};



    const getUsers = () => {axios.get(url).then(response => {
        let dataJson = response.data;
        setUsers(dataJson);
    }).catch((error) => {
        console.log(error)
    })};



    useEffect(() => {
        checkAndSetAuth();
        getUsers();
    }, [])



    return (
        <div>
            <table border="1">
                <tr>
                    <td>email</td>
                    <td>name</td>
                    <td>age</td>
                    <td>role</td>
                </tr>
                {
                    users.map((item) =>
                        <tr>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.role}</td>
                            {isAuth ? <td>
                                <button
                                    onClick={() => window.location.href = '/editUser/' + item.id}>
                                    Edit
                                </button>
                            </td> : ""}
                            {isAuth ? <td>
                                <button onClick={() => deleteUser(item.id)}>
                                    Delete
                                </button>
                            </td> : ""}
                        </tr>
                    )
                }
            </table>
        </div>
    );
};

export default Users;