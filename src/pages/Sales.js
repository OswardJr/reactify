import React, { useEffect, useState } from "react"
import {
    Table,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

const Sales = () => {

const [posts, setData] = useState([])
const [fullposts, setDataLength] = useState([])

const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json()
    })
    .then(data => {
        //console.log(data)
        setData(data)
        setDataLength(data)
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
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    {posts.length > 0 && (
                        <tbody>
                        {posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))}
                        </tbody>
                    )}
                </Table>

                <Pagination data={fullposts}></Pagination>

            </div>
        </div>
    )
}

export default Sales