import logo from './logo.svg';
import './App.css';
import Mainclass from './components/class/mainclass'
import ThemeContext from "./components/context/ThemeContext";
import Mainfunction from './components/function/mainfn'
function App() {
  const theme = "light";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ThemeContext.Provider value = {theme}>
      <div> 
        {/* <Mainclass/> */}
        <Mainfunction/>
      </div>
    </ThemeContext.Provider>
     
    </div>
  );
}

export default App;
