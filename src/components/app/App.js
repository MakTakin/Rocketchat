import React, {useEffect, useState} from 'react';
import {SERVER_URL} from "../../settings/constants";
import Search from "../search/search";
import ListPosts from "../list-posts/list-posts";
import Pagination from "../pagination/pagination";
import {Container, Header} from "../../styled/styled";
import "./App.css"

function App() {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [visiblePosts, setVisiblePosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`${SERVER_URL}posts`, )
            .then(require => require.json())
            .then(posts => {
                setPosts(posts)
                setVisiblePosts(posts)
            })
        fetch(`${SERVER_URL}users`)
            .then(require => require.json())
            .then(users => {
                setUsers(users)
                setLoading(false)
            })
    }, [])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = visiblePosts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const onSearch = (term) => {
        if (term.length === 0) {
            return setVisiblePosts(posts)
        }
        paginate(1)
        const visible = posts.filter((post) =>
             post.title.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
             post.body.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
             users[post.userId - 1].name.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
             users[post.userId - 1].username.toLowerCase().indexOf(term.toLowerCase()) > -1
        )
        return setVisiblePosts(visible)
    }

    return (

        <Container>
            <Header>List of Posts</Header>
            <Search
                onSearch={onSearch}
            />
            <ListPosts
                posts={currentPosts}
                users={users}
                loading={loading}
            />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={visiblePosts.length}
                paginate={paginate}
            />
        </Container>
    );
}
export default App;
