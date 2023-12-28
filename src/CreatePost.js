import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace the URL with your API endpoint
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1, // Replace with the desired user ID
      });

      console.log('New post created:', response.data);
      navigate('/'); // Navigate to the home page after creating a post
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
