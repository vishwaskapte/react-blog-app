import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPost = ({ match }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    // Replace the URL with your API endpoint
    axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [match.params.id]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
