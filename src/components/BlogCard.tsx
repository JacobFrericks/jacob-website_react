import React from 'react';
import './BlogCard.scss';



const BlogCard = props => {
    let blogPost = props.blogPost;
    return (
        <div>
            <img
                src={blogPost.coverImage}
                alt={"Blog post cover"}
                style={{ width: "100%", objectFit: "contain" }}
            />
            <div className='blogTitle'>{blogPost.title}</div>
            <div className='blogDate'>{blogPost.date}</div>
            <div className='blogDescription'>{blogPost.description}</div>
        </div>
    );
};

export default BlogCard;