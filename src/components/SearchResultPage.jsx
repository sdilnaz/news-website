import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import NewsItem from "./NewsItem";

const SearchResultPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?language=en&q=${query}&sortBy=popularity&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        setSearchResults(data.articles);
        setTotalPages(Math.ceil(data.totalResults / 20)); // Assuming 20 articles per page
        
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchSearchResults();
  }, [query, page]); // Include page in dependencies

  const handleSortBy = (sortCriteria) => {
    // Make a copy of searchResults array to avoid mutating the original state
    const sortedResults = [...searchResults];

    if (sortCriteria === 'date') {
      sortedResults.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    } else if (sortCriteria === 'title') {
      sortedResults.sort((a, b) => a.title.localeCompare(b.title));
    }

    setSearchResults(sortedResults);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      window.scrollTo(0, 0);
      setLoading(true); // Set loading to true before fetching new data
      setPage(newPage); // Set new page
    }
  };

  // If loading, display loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!searchResults || searchResults.length === 0 || searchResults.length < (page - 1) * 20) {
    return <div>No articles found.</div>;
  }


  // If articles is undefined or empty, display message
  if (!query || query.length === 0 || searchResults.length === 0) {
    return <div>No articles found.</div>;
  }

  // Generate pagination links dynamically
  const paginationItems = [];
  const maxButtons = 5; // Maximum number of buttons to show

  // Calculate start and end page numbers for pagination
  let startPage = Math.max(1, Math.min(page - Math.floor(maxButtons / 2), totalPages - maxButtons + 1));
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  // Add "Previous" button
  paginationItems.push(
    <li key="prev" className={`page-item ${page === 1 ? 'disabled' : ''}`}>
      <button className="page-link" onClick={() => handlePageChange(page - 1)} aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </button>
    </li>
  );

  // Add page buttons
  for (let i = startPage; i <= endPage; i++) {
    paginationItems.push(
      <li key={i} className={`page-item ${page === i ? 'active' : ''}`}>
        <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
      </li>
    );
  }

  // Add "Next" button
  paginationItems.push(
    <li key="next" className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
      <button className="page-link" onClick={() => handlePageChange(page + 1)} aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="btn-group btn-group-sm" role="group" aria-label="Small button group" style={{ marginBottom: "20px" }}>
        <button type="button" className="btn btn-outline-primary" onClick={() => handleSortBy("date")}>Sort by Date</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => handleSortBy("title")}>Sort by Title</button>
      </div>
      <h3 style={{ textAlign: 'center' }}>Search Results for "{query}"</h3>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {searchResults.map((news, index) => {
          // Check if status is error or title is [removed], if so, skip rendering this news item
          if (news.status === "error" || news.title === "[Removed]") {
            return null;
          }
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              date={news.publishedAt}
              content={news.content}
              author={news.author}
              url={news.url}
            />
          );
        })}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {paginationItems}
        </ul>
      </nav>
    </div>
  );
};

export default SearchResultPage;
