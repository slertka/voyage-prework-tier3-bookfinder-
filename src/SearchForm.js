import React from "react";

export default function SearchForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
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
