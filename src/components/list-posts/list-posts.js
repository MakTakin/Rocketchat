import React from 'react'
import {Name, Post, UserName} from "../../styled/styled"

function ListPosts({posts, users,loading}) {

    if (loading) {
        return <h2>...loading</h2>
    }
    return (
        <div>
            {
                posts.map(post =>
                <Post key={post.id} >
                    <Name>{users[post.userId - 1].name}</Name>
                    <UserName>{users[post.userId - 1].username}</UserName>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </Post>
                )
            }
        </div>
    )
}
export default ListPosts