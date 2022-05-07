import React from "react";
import "../components/style.css"
function Searchbar({ search, setSearch }) {
  return (
    <div className="searchdiv">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          //console.log(search);
        }}
        type="text"
        placeholder="Find a Recipe"
        className="searchtext"
      ></input>
    </div>
  );
}

export default Searchbar;
