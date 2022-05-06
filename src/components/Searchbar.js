import React from "react";

function Searchbar({ search, setSearch }) {
  const styles = {
    searcdiv: {
      marginTop: "20px",
    },
    text: {
      padding: "12px",
      width: "80%",
      border: "1px solid gray",
      borderRadius: "5px",
    },
  };
  return (
    <div style={styles.searcdiv}>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          //console.log(search);
        }}
        type="text"
        placeholder="Find a Recipe"
        style={styles.text}
      ></input>
    </div>
  );
}

export default Searchbar;
