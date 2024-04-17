
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/tengri-default.png';

const NewsItem = ({ title, description, src, date, author, content ,url}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/news/${encodeURIComponent(title)}`, {
      state: {
        title,
        description,
        src,
        date,
        author,
        content,
        url,
      },
    });
  };
  return (
    <div onClick={handleCardClick} style={{ textDecoration: 'none', cursor: 'pointer' }}>
      <div className="d-inline-flex flex-wrap" style={{ marginBottom: '20px' }}>
        { /* Wrap each row in a container */ }
        <div className="row-container" style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div className="card mb-3 mx-3" style={{ width: '265px', color: isHovered ? 'green' : 'black', display: 'flex', flexDirection: 'column' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={src ? src : image} className="card-img-top" alt="..." style={{ height: '150px', objectFit: 'cover' }} />
            <div className="card-body" style={{ minHeight: '100px', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
              <h6 className="card-title">{title.slice(0, 200)}</h6>
              <div style={{ marginTop: 'auto' }}>
                <small className="text-muted">{new Date(date).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</small>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
  
  
  
  
  
  
  };  

export default NewsItem;
