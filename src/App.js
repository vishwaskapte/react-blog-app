import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import CreatePost from './CreatePost';
import EditPost from './EditPost';

const App = () => {
  // State to manage the list of posts
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route
            path="/"
            element={<BlogList posts={posts} setPosts={setPosts} />}
          />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/create-post" element={<CreatePost setPosts={setPosts} />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
