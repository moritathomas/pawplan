// src/components/Post.js
import React from 'react';
import './Post.css';

const Post = ({ date, title, excerpt }) => {
    return (
        <div className="post">
            <p className="post-date">{date}</p>
            <h2>{title}</h2>
            <p>{excerpt}</p>
        </div>
    );
};

export default Post;
