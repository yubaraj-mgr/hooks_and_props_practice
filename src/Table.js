import React from "react";

export const Table = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
};
