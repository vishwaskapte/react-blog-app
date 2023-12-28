import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Replace the URL with your API endpoint
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      // Replace the URL with your API endpoint
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/post/${blog.id}`}>{blog.title}</Link>
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
            <Link to={`/edit-post/${blog.id}`}>Edit</Link>
          </li>
        ))}
      </ul>

      <Link to="/create-post">Create New Post</Link>
    </div>
  );
};

export default BlogList;
