import "./news.css";
import { Component } from "react";
import NewsItem from "../newsitem/NewsItem";
import SchemesSlider from "../schemesslider/ShemeSlider";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  getFormattedDate() {
    const currentDate = new Date();
    let adjustedMonth = currentDate.getMonth() - 1;
    let adjustedYear = currentDate.getFullYear();

    if (adjustedMonth < 0) {
      adjustedMonth = 11;
      adjustedYear -= 1;
    }

    const adjustedDate = new Date(adjustedYear, adjustedMonth, currentDate.getDate() + 1);
    return adjustedDate.toISOString().split("T")[0];
  }

  fetchArticles = async () => {
    const { page } = this.state;
    const formattedDate = this.getFormattedDate();
    const apiKey = "";//57071cbb61b94e9c9f7308f4f8a13c35
    const url = `https://newsapi.org/v2/everything?q=crops&from=${formattedDate}&sortBy=publishedAt&apiKey=${apiKey}&page=${page}&pageSize=20`;

    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        articles: data.articles || [],
        totalResults: data.totalResults || 0,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching articles:", error);
      this.setState({ articles: [], loading: false });
    }
  };

  handlePageChange = (direction) => {
    this.setState(
      (prevState) => ({ page: prevState.page + direction }),
      this.fetchArticles
    );
  };

  render() {
    const { articles, page, totalResults, loading } = this.state;

    return (
      <div className="news-container">
        <SchemesSlider />
        <div className="news-main-container">
          <h1 className="news-heading">Top Agriculture Headlines</h1>

          {loading ? (
            <div className="loading-container text-center my-5">
              <p>Loading news articles, please wait...</p>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : articles.length > 0 ? (
            <div className="news-row">
              {articles.map((article) => (
                <div className="news-col" key={article.url}>
                  <NewsItem
                    title={
                      article.title
                        ? article.title.slice(0, 45) + (article.title.length > 45 ? "..." : "")
                        : "No Title Available"
                    }
                    description={
                      article.description
                        ? article.description.slice(0, 84) + (article.description.length > 84 ? "..." : "")
                        : "No Description Available"
                    }
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-news-container text-center my-5">
              <p>No news articles available. Please try again later.</p>
            </div>
          )}

          <div className="pagination-container">
            <button
              type="button"
              className="pagination-btn prev-btn"
              onClick={() => this.handlePageChange(-1)}
              disabled={page === 1}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="pagination-btn next-btn"
              onClick={() => this.handlePageChange(1)}
              disabled={page >= Math.ceil(totalResults / 20)}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
