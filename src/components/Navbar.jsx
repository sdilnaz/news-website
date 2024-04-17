import React, { useState } from 'react';
import logo from '../assets/tengriLogo.png';
import { useNavigate } from 'react-router-dom'; // Import usenavigate hook
import './Navbar.css';

const Navbar = ({ setCategory, setSearchResults }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate(); // Get navigate object from usenavigate hook

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Call setSearchResults with search input
    setSearchResults(searchInput.trim());
    // Redirect to search results page
    navigate(`/search/${encodeURIComponent(searchInput.trim())}`);
  };

  const handleCategoryClick = (category) => {
    // Call setCategory with the selected category
    setCategory(category);
    // Redirect to category page with the selected category as a parameter
    navigate(`/`);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} style={{ width: "250px" }} alt="TENGRI NEWS" /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("general")}>NEWS</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("entertainment")}>LIFE</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("sports")}>SPORT</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("science")}>EDU</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("technology")}>TECHNOLOGY</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("health")}>HEALTH</div>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                id="searchInput"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchInput}
                onChange={handleInputChange}
              />
              <button id="search" className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
