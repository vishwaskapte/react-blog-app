import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

const App = () => {
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
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
