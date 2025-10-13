import logo from './logo.svg';
import PaginaPrincipal  from './components/PaginaPrincipal';
import Techno from './components/techno';
import Destaques from './components/destaques';
import './App.css';

function App() {
  return (
    <div className="App">
      <PaginaPrincipal/>
      <Techno/>
      <Destaques/>
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
    </div>
  );
}

export default App;
