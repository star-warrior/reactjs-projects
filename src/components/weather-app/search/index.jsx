import { useState } from "react";

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        name="search"
        value={search}
        placeholder="city search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
