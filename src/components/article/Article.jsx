import React from "react";
import "./Article.css";

function Article({ imgUrl, date, title }) {
  return (
    <div className="maker__blog-container_article">
      <div className="maker__blog-container_article-image">
        <img src={imgUrl} alt="blogImage" />
      </div>
      <div className="maker__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  );
}

export default Article;
