import React, { useState } from "react";

const EvenAndOdd = () => {
  //States
  const [even, setEven] = useState([]);
  const [odd, setOdd] = useState([]);
  const [userInput, setUserInput] = useState("");
  //Functions
  const evensAndOdds = (nums) => {
    let evenArr = [];
    let oddArr = [];
    nums
      .split(",")
      .map((x) => (x % 2 === 0 ? evenArr.push(x) : oddArr.push(x)));
    setEven(evenArr);
    setOdd(oddArr);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input onChange={handleChange} type="text" className="inputLine" />
      <button
        onClick={() => {
          evensAndOdds(userInput);
        }}
        className="confirmationButton"
      >
        Evens or Odds?
      </button>
      <span className="resultsBox">Evens: {even}</span>
      <span className="resultsBox">Odds: {odd}</span>
    </div>
  );
};

export default EvenAndOdd;
