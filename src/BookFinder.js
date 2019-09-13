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
    isLoading: false,
    searchExecuted: false,
    bookData: []
  };

  getBookDataFromAPI = e => {
    e.preventDefault();

    // display loading page
    this.setState({ isLoading: true, searchExecuted: false, dataFound: false });

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
      .then(resj => {
        this.setState({
          isLoading: false,
          searchExecuted: true,
          bookData: resj.items
        });
      })
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
          {this.state.isLoading && <h2>Finding books...</h2>}

          {this.state.searchExecuted &&
            this.state.bookData &&
            this.state.bookData.map(book => (
              <BookCard volumeInfo={book.volumeInfo} />
            ))}

          {/* this.state.bookData.map(book => (
              <BookCard volumeInfo={book.volumeInfo} /> */}

          {this.state.searchExecuted && !this.state.bookData && (
            <h2>No results found. Try a different search term!</h2>
          )}
        </div>
      </React.Fragment>
    );
  }
}
