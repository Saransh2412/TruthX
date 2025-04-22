import React, { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [region, setRegion] = useState('global');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const articlesPerPage = 6;
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const queryParams = region === 'india' 
          ? 'q=deepfake%20detection%20AND%20(india%20OR%20indian)' 
          : 'q=deepfake%20detection';

        const response = await axios.get(
          `https://newsapi.org/v2/everything?${queryParams}&sortBy=publishedAt&page=${page}&pageSize=${articlesPerPage}&apiKey=${API_KEY}`
        );

        if (page === 1) {
          setArticles(response.data.articles);
        } else {
          setArticles(prevArticles => [...prevArticles, ...response.data.articles]);
        }

        // Check if we've reached the end of available articles
        setHasMore(response.data.articles.length === articlesPerPage);
        setLoading(false);
      } catch (error) {
        setError("Error fetching news. Please try again later.");
        setLoading(false);
      }
    };

    fetchNews();
  }, [API_KEY, region, page]);

  const handleShowMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // Reset page when region changes
  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [region]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#2c387e] to-[#6200ea] text-white p-8 flex justify-center items-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c387e] to-[#6200ea] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="text-4xl font-bold">
            🔍 Deepfake Detection News
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => setRegion('global')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                region === 'global' 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'bg-white bg-opacity-10 hover:bg-opacity-20'
              }`}
            >
              Global News
            </button>
            <button
              onClick={() => setRegion('india')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                region === 'india' 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'bg-white bg-opacity-10 hover:bg-opacity-20'
              }`}
            >
              Indian News
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.length > 0 ? (
            <>
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">
                      {article.description?.slice(0, 100)}...
                    </p>
                    <div className="flex justify-between items-center">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-200 hover:text-white text-sm underline"
                      >
                        Read Full Article →
                      </a>
                      <span className="text-xs text-gray-300">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {hasMore && (
                <div className="col-span-3 flex justify-center mt-8">
                  <button
                    onClick={handleShowMore}
                    className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      'Loading...'
                    ) : (
                      <>
                        Show More
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="col-span-3 text-center text-xl">
              No articles found. Try changing the filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;


