import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Explore = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: 'stock market',
                        apiKey: '17226c63b3c14d72b4d2e8fbfc285c7b', // Replace with your API key
                        sortBy: 'publishedAt',
                        language: 'en',
                    },
                });
                setNews(response.data.articles);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const containerStyle = {
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f4f4f4',
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle = {
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '30px',
        color: '#333',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
    };

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: '600',
        fontSize: '20px',
        marginBottom: '10px',
        display: 'block',
        transition: 'color 0.3s ease',
    };

    const descriptionStyle = {
        color: '#555',
        fontSize: '16px',
        lineHeight: '1.6',
        marginBottom: '10px',
    };

    const dateStyle = {
        color: '#999',
        fontSize: '14px',
        marginTop: '10px',
    };

    const cardHoverStyle = {
        transform: 'scale(1.02)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    };

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '24px', color: '#999' }}>Loading...</div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '24px', color: 'red' }}>Error: {error}</div>;
    }

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>Latest Stock Market News</h2>
            <div style={gridStyle}>
                {news.map((article, index) => (
                    <div
                        key={index}
                        style={cardStyle}
                        onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                        onMouseLeave={(e) => (e.currentTarget.style = { ...cardStyle })}
                    >
                        <a href={article.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            {article.title}
                        </a>
                        <p style={descriptionStyle}>{article.description}</p>
                        <p style={dateStyle}>{new Date(article.publishedAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
