// import logo from './logo.svg';
import './App.css';
import React from "react";
// import CheckBox from "./CheckBox";
import Jokes from "./Jokes";

function App() {
  return (
      <div>
        <form>
            <Jokes question={"This is a joke"} punchLine={"This is a punchline"}/>
            <Jokes punchLine={"This is a punchline"}/>
        </form>
      </div>
  );
}

export default App;
