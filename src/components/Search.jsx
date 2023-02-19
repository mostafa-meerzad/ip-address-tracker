import { useState } from "react";
import { Arrow } from "../icons";

function Search({ callback }) {
  const [search, setSearch] = useState();
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search for any IP address or domain"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {if(e.key === "Enter"||e.key === "enter") callback(search)}}
      />
      <button
        aria-label="button"
        className="search__btn"
        onClick={() => {
          callback(search);
        }}
      >
        <Arrow />
      </button>
    </div>
  );
}

export default Search;
