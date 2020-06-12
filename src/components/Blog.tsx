import React, {useEffect, useState} from 'react';
import './Blog.scss';
import { BlogObj } from '../objects/blogObj';
import BlogCard from "./BlogCard";

const superagent = require('superagent');

const Blog = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts().then(result => {
            console.log("IN USE-EFFECT", result);
            setPosts(result);
            setLoading(false)
        })
    }, []);

    console.log("Posts state", posts);

    return (
        <div>
            <div className='title'>Blog</div>
            {loading && <h1>loading posts...</h1>}
            <div className='blogGrid'>
                {!loading &&
                posts.map(post => {
                    let blogPost = new BlogObj(post);
                    console.log(blogPost);
                    return (
                        <BlogCard classNamekey={blogPost.id} blogPost={blogPost} />
                    )
                })}
            </div>
        </div>
    )
};

const getPosts = async () => {
    const DEV_TO_URL = "https://dev.to/api/articles";

    try {
        return superagent
            .get(DEV_TO_URL)
            .query({username: "jacobfrericks"})
            .then(res => {
                return res.body
            });
    } catch (error) {
        console.log("Exception thrown when getting blog posts", error)
    }
};

export default Blog;