

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsPage from './components/NewsPage';
import NewsDetails from './components/NewsDetails';
import SearchResultPage from './components/SearchResultPage';

function App() {
  const [category, setCategory] = useState("general");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1); // Define setPage

  return (
    <Router>
      <div>
        <Navbar setCategory={setCategory} setSearchResults={setSearchResults} /> 
        
        <Routes>
          <Route path="/" element={<NewsPage category={category} page={page} setPage={setPage} />} /> {/* Pass setPage to NewsPage */}
          <Route path="/news/:title" element={<NewsDetails />} />
          <Route path="/search/:query" element={<SearchResultPage searchResults={searchResults} page={page} setPage={setPage} />} /> {/* Pass setPage to SearchResultPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
