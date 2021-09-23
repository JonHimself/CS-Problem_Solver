import React, { useState } from "react";

const FilterObject = () => {
  const [unfiltered, setUnfiltered] = useState([
    { id: Math.ceil(Math.abs(Math.random() + 1)), symbol: "BTC", price: 45000 },
    { id: Math.abs(Math.random() + 1), symbol: "ETH" },
    { id: Math.abs(Math.random() + 1), symbol: "XMR", price: 250 },
    { id: Math.abs(Math.random() + 1), symbol: "SHIB" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFilter = (prop) => {
    let objects = unfiltered;
    let filteredObject = [];
    objects.map((x) => (x.hasOwnProperty(prop) ? filteredObject.push(x) : ""));
    setFiltered(filteredObject);
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">
        Property Sample: {JSON.stringify(unfiltered[0])}
      </span>
      <input onChange={handleChange} type="text" className="inputLine" />
      <button
        onClick={() => {
          handleFilter(userInput);
        }}
        className="confirmationButton"
      >
        Filter Me Daddy!
      </button>
      <span className="resultsBox filterObjectRB">
        {JSON.stringify(filtered, null, 10)}
      </span>
    </div>
  );
};

export default FilterObject;
