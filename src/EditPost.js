import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Replace the URL with your API endpoint
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data);
        setTitle(response.data.title);
        setBody(response.data.body);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace the URL with your API endpoint
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title,
        body,
        userId: 1, // Replace with the desired user ID
      });

      console.log('Post updated successfully');
      navigate(`/post/${id}`);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required />

        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
