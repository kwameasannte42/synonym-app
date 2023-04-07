import './App.css';
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [word, setWord] = useState("")

  const handleFetchSynonym = (e) => {
    e.preventDefault();

    fetch(`https://api.datamuse.com/words?rel_syn=fast`)
    
  }

  return (
    <div className="App">
      <form onSubmit={handleFetchSynonym}>
        <label htmlFor="word-input">word</label>
        <input  id='word-input' value={word} onChange={(e) => setWord(e.target.value)} />
        <button type='button' className='btn btn-success'>Submit</button>
      </form>
    </div>
  );
}

export default App;
