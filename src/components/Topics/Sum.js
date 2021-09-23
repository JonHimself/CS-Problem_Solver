import React, { useState } from "react";

const Sum = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(null);

  const handleOne = (e) => {
    setNum1(e.target.value);
  };

  const handleTwo = (e) => {
    setNum2(e.target.value);
  };

  const summyBakka = (propOne, propTwo) => {
    let result = Number(propOne) + Number(propTwo);
    setSum(result);
  };

  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input onChange={handleOne} type="text" className="inputLine" />
      <input onChange={handleTwo} type="text" className="inputLine" />
      <button
        onClick={() => {
          summyBakka(num1, num2);
        }}
        className="confirmationButton"
      ></button>
      <span className="resultsBox">{sum}</span>
    </div>
  );
};

export default Sum;
