import React from "react";
import { useState } from "react";
import "./SearchBar.css"; // Assuming you have a CSS file for styles

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
};

export default SearchBar;
