import React, { useState } from "react";

const FilterString = () => {
  const [unfiltered, unsetFiltered] = useState(["btc", "eth", "xmr", "ltc"]);
  const [userInput, setUserInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const stringMePapi = (prop) => {
    let strings = unfiltered;
    let papi = [];
    papi.push(strings.filter((x) => x === prop));
    setFiltered(papi);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">Set: {unfiltered.join(", ")}</span>
      <input onChange={handleChange} type="text" className="inputLine" />
      <button
        onClick={() => stringMePapi(userInput)}
        className="confirmationButton"
      >
        UwU senpai-sama-nani-ayaya
      </button>
      <span className="resultsBox filterStringRB">{filtered}</span>
    </div>
  );
};

export default FilterString;
