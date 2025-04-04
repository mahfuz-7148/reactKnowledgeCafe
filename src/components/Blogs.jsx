import React, {useEffect, useState} from 'react';
import Blog from "./Blog.jsx";

const Blogs = ({addToBookmarks, markAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className='w-2/3'>
            <h1 className='text-4xl text-center mt-5 mb-5'>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => (
                    <Blog
                    key={blog.id}
                    blog={blog}
                    addToBookmarks={addToBookmarks}
                    markAsRead={markAsRead}
                    />
                ))
            }
        </div>
    );
};

export default Blogs;