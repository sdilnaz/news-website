import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./TechnologySlider.css"; 
import image from '../assets/tengri-default.png';

SwiperCore.use([Navigation, Autoplay]);

const TechnologySlider = () => {
  const [articles, setArticles] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=10&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []); // Empty dependency array to fetch articles only once on component mount

  useEffect(() => {
    if (swiper) {
      swiper.autoplay.start(); // Start autoplay when swiper instance is available
    }
  }, [swiper]);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        autoplay={{ delay: 5000 }}
        onSwiper={setSwiper}
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-content">
              <div className="text">
                <h4>{article.title}</h4>
                <p>{article.description}</p>
                <div style={{ marginTop: 'auto' }}>
                <small className="text-muted">{new Date(article.publishedAt).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</small>
              </div>
              </div>
              <div className="image">
                <img src={article.urlToImage ? article.urlToImage : image} alt={article.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default TechnologySlider;
