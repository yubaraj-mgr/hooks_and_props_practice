import React, { useState } from "react";

export const Form = ({ getData }) => {
  const [val, setVal] = useState("");
  //   const [newVal, setNewVal] = useState([]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setNewVal(val);
    getData(val);
    // this will remove this value from input
    e.target.reset();
  };
  const handleOnChange = (e) => {
    const { value } = e.target;
    setVal(value);
  };
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
        <button type="submit">Submit</button>
      </form>
      {/* <h1>{newVal}</h1> */}
    </div>
  );
};
