import React, {  useState } from "react";
import "./rs.css";

const RightScreen = () => {
  const [input, setInput] = useState("");
  const [state, setstate] = useState([]);

  return (
    <div className="rightComp">
      <h2>FORM DATA</h2>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          setstate([...state, input]);
        }}
      >
        Add
      </button>
      <div className="rightDataContainer">
        {state.length > 0 &&
          state.map((ele) => {
            return <div className="container">{ele}</div>;
          })}
      </div>
    </div>
  );
};

export default RightScreen;
