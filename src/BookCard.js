import React from "react";
import "./BookCard.css";

export default function BookCard(props) {
  return (
    <div className="book-card">
      {props.volumeInfo.imageLinks ? (
        <img
          src={props.volumeInfo.imageLinks.smallThumbnail}
          alt={`Google books thumbnail for ${props.volumeInfo.title}`}
          className="book-image"
        />
      ) : (
        <img src="" alt="No thumnail found for book" className="book-image" />
      )}
      <div className="book-info">
        <p className="book-title">{props.volumeInfo.title}</p>
        <p className="book-author">
          {props.volumeInfo.authors
            ? `By: ${props.volumeInfo.authors.join(", ")}`
            : `By: No authors found`}
        </p>
        <p className="book-publisher">
          {props.volumeInfo.publisher
            ? `Published By: ${props.volumeInfo.publisher}`
            : `Published By: No publishers found`}
        </p>
        <a
          href={props.volumeInfo.infoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="book-more-info-btn">See this book</button>
        </a>
      </div>
    </div>
  );
}
