import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { Link } from 'react-router-dom';
import TechnologySlider from "./Slider";


const NewsPage = ({ category, page, setPage }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url;
        if (category) {
          url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`;
          const response = await fetch(url);
          const data = await response.json();
          setArticles(data.articles);
          setTotalPages(Math.ceil(data.totalResults / 20)); // Assuming 20 articles per page
        } else {
          console.error("Invalid category or page number.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, page]);

  const handleSortBy = (sortCriteria) => {
    if (sortCriteria === 'date') {
      setArticles(articles.slice().sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)));
    } else if (sortCriteria === 'title') {
      setArticles(articles.slice().sort((a, b) => a.title.localeCompare(b.title)));
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      window.scrollTo(0, 0);
      setArticles([]);
      setPage(newPage);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!articles || articles.length === 0) {
    return <div>No articles found.</div>;
  }

  // Generate pagination links dynamically
  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <li key={i} className={`page-item ${page === i ? 'active' : ''}`}>
        <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
      </li>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TechnologySlider />
      <div className="btn-group btn-group-sm" role="group" aria-label="Small button group" style={{ marginBottom: "20px",marginLeft: "175px", alignSelf:"start"}}>
        <button type="button" className="btn btn-outline-secondary" onClick={() => handleSortBy("date")}>Sort by Date</button>
        <button type="button" className="btn btn-outline-secondary" onClick={() => handleSortBy("title")}>Sort by Title</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {articles.map((news, index) => {
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
              url = {news.url}
            />
          );
        })}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(page - 1)} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {paginationItems}
          <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(page + 1)} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NewsPage;
