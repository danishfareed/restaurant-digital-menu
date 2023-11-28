import React from "react";
import MyRouter from "./router/Index";
import './App.css';

function App() {
  return (
    <div className="bg-white">
      <MyRouter children={undefined} />
    </div>
  );
}

export default App;
