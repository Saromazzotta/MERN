import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import WordColor from './components/WordColor';

function App() {

  const numberCheck = (userInput) => {
    if (isNaN(userInput)) {
      console.log(userInput)
      console.log("This is not number!")
      return `The word is: ${userInput} `
      // return true
    }
    else {
      console.log(userInput)
      console.log("This is a number!")
      return `The number is: ${userInput}`
      // return false
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/:user_input" element={<Home numberCheck={numberCheck} />} />
        {/* <Route path="/:number" element={<Number numberCheck={numberCheck} />} /> */}
        {/* <Route path="/:word" element={<Word numberCheck={numberCheck} />} /> */}
        <Route path="/:word/:tColor/:bColor" element={<WordColor numberCheck={numberCheck} />} />
      </Routes>
    </div>
  );
}

export default App;
