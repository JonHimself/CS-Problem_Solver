import React, { useState } from "react";

const Palindrome = () => {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const palindong = (prop) => {
    let result =
      prop === prop.split("").reverse().join("")
        ? "same shit dawg"
        : "youza dumb lil bitch";
    setPalindrome(result);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input onChange={handleChange} type="text" className="inputline" />
      <button
        onClick={() => {
          palindong(userInput);
        }}
        className="confirmationButton"
      >
        GIVE ME SOME BOMB A$$ PALIN --**DOME** !!!--
      </button>
      <span className="resultsBox">{palindrome}</span>
    </div>
  );
};

export default Palindrome;
