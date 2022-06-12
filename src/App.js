import React, { useState } from "react";
import { Form } from "./Form";
import { Table } from "./Table";
const App = () => {
  const [data, setData] = useState(["1", "2", "3"]);
  const getData = (e) => {
    setData([...data, e]);
  };
  return (
    <div>
      <Form getData={getData} />
      <Table data={data} />
    </div>
  );
};

export default App;
