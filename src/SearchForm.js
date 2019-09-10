import React from "react";
import "./SearchForm.css";

export default function SearchForm(props) {
  return (
    <form onSubmit={props.handleSubmit} id="book-search">
      <input
        type="text"
        placeholder="Enter search term..."
        onChange={props.handleInputUpdate}
        required
      />
      <input type="submit" value="Search" />
    </form>
  );
}
