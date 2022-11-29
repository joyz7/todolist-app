import React from "react";
import Empty from "./Components/Empty";
import Input from "./Components/Input";

function App() {
  return (
    <>
      <Empty />
      <h1>hi</h1>
      <input type="text" id="list-item" name="list-item"></input>
      <Input />
    </>
  );
}

export default App;
