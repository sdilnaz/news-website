import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsPage = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error("Error fetching data:", error));
    }, [category]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {articles.map((news, index) => (
                    // Only render the NewsItem if the title is not empty
                    news.title!="[Removed]" && <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} date={news.publishedAt} />
                ))}
                </div>
        </div>
        
    )
}

export default NewsPage;
