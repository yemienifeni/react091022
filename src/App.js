import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/Logo 4.jpg" height={300} width={300} alt=""/>
	  <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Logo
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
    </div>
  );
}

export default App;
