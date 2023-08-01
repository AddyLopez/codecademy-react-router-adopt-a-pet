import React, { useRef } from "react";
// Import createSearchParams

import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value,
    };

    // use createSearchParams
    const query = "REPLACE ME";

    // imperatively redirect with useNavigate() returned function
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
