import React, { useEffect, useState } from "react"
import {
    Table
} from 'reactstrap';

const Clients = () => {

const [users, setData] = useState([])

const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
    })
    .then(data => {
        //console.log(data)
        setData(data)
    })
}

useEffect(() => {
    fetchData()
  }, [])

    return (
        <div className="flex-container">
            <div className="flex-item-max">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    {users.length > 0 && (
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        ))}
                        </tbody>
                    )}
                </Table>
            </div>
        </div>
    )
}

export default Clients