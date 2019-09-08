import React from "react";
import "./BookCard.css";

export default function BookCard(props) {
  return (
    <div className="book-card">
      {props.volumeInfo.imageLinks ? (
        <img
          src={props.volumeInfo.imageLinks.thumbnail}
          alt={`Google books thumbnail for ${props.volumeInfo.title}`}
        />
      ) : (
        <img src="" alt="No thumnail found for book" />
      )}
      <p>{props.volumeInfo.title}</p>
      <p>{props.volumeInfo.authors && props.volumeInfo.authors.join(", ")}</p>
      <p>{props.volumeInfo.publisher}</p>
      <a href={props.volumeInfo.infoLink}>Link to More Information</a>
    </div>
  );
}
