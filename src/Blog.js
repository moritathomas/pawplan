// src/components/Blog.js
import React from 'react';
import Post from './Post';

const Blog = () => {
    const posts = [
        { date: "20 May 2024", title: "Hugo Dark and Light mode images", excerpt: "Auto-switch images based on theme." },
        { date: "16 May 2024", title: "Probabilistic to-visit Queue", excerpt: "Storing a set of 1 billion visited URLs in a tomb." },
        { date: "1 Feb 2024", title: "Search Engine in Rust", excerpt: "A search engine overview and Rust implementation." },
        { date: "12 Nov 2023", title: "Log-Structured Merge Tree", excerpt: "An LSM Tree overview and Java implementation." }
    ];

    return (
        <div className="blog">
            <h2>Posts</h2>
            {posts.map((post, index) => (
                <Post key={index} date={post.date} title={post.title} excerpt={post.excerpt} />
            ))}
        </div>
    );
};

export default Blog;
