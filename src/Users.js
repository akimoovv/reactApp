import React, {useEffect, useState} from "react";
import axios from "axios";


const Users = () => {


    const deleteUserUrl = 'http://localhost:8080/myapp/api/v1/users/';

    const [isAuth, setIsAuth] = useState(true);

    const [users, setUsers] = useState([]);


    const deleteUser = (id) => {axios.delete(deleteUserUrl + id).then(response => {
        console.log(response)
        getUsers();
    }).catch((error) => {
        console.log(error)
    })};


    const getUsers = () => {axios.get(deleteUserUrl).then(response => {
        let dataJson = response.data;
        setUsers(dataJson);
    }).catch((error) => {
        console.log(error)
    })};



    useEffect(() => {
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