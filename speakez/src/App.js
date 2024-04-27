import React, {Component} from "react";
import './App.css';
import './widgets/WordCard'
import WordCard from "./widgets/WordCard";

class App extends Component {
  render () {
    return (
      <div className="App">
        <WordCard />
        <p id="test_state"></p>
      </div>
    )
  }
}

export default App;
