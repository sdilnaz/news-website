import React from 'react';
import image from '../assets/tengri-default.png'
import { useLocation } from 'react-router-dom';

const NewsDetailPage = () => {
  const location = useLocation();
  const { title, description, src, date, content, author, url} = location.state;

  
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ marginBottom: '10px', fontSize: '24px', color: '#333' }}>{title}</h2>
      <p style={{ fontSize: '14px', color: '#777' }}>Author: {author}</p>
      <p style={{ fontSize: '14px', color: '#777' }}>Published on: {new Date(date).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
      <img src={src ? src : image} alt="News" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }} />
      <p style={{ marginBottom: '10px', fontSize: '22px', color: '#333' }}><strong>{description}</strong></p>
      <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '20px' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.5', color: '#333', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>{content}</p>
      </div>
      
      <p style={{ fontSize: '14px', color: '#777' }}>To read the full article, follow <a href={url}> this link</a>.</p>
      </div>
  );
  
  
};

export default NewsDetailPage;
