import React from "react";
import "./BookFinder.css";

// Components
import SearchForm from "./SearchForm";
import BookCard from "./BookCard";

// Google Books API Key
import { GBOOK_KEY } from "./config";

export default class BookFinder extends React.Component {
  state = {
    searchQuery: "",
    bookData: []
  };

  getBookDataFromAPI = e => {
    e.preventDefault();

    // get search text string
    let API_URL =
      `https://www.googleapis.com/books/v1/volumes?` +
      `key=${GBOOK_KEY}&` +
      `fields=items(volumeInfo(title,authors,publisher,imageLinks,infoLink))&` +
      `q=${this.state.searchQuery.split(" ").join("+")}`;

    fetch(API_URL)
      .then(res => {
        if (!res.ok) {
          alert("It looks like something went wrong! Try again");
        } else {
          return res.json();
        }
      })
      .then(resj => this.setState({ bookData: resj.items }))
      .catch(err =>
        alert(`Something may have gone wrong! Try again. Ref: ${err}`)
      );
  };

  updateSearchQuery = q => {
    this.setState({
      searchQuery: q
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>BOOK FINDER</h1>
        <SearchForm
          handleInputUpdate={e => this.updateSearchQuery(e.target.value)}
          handleSubmit={e => this.getBookDataFromAPI(e)}
        />
        <div id="book-card-container">
          {this.state.bookData.map(book => (
            <BookCard volumeInfo={book.volumeInfo} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
