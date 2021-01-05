import logo from './logo.svg';
import './App.css';
import { VideoGameGrid } from "./VideoGameGrid"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Have you played the best video games over the years</p>
      </header>
      <main>
        <VideoGameGrid />
      </main>
    </div>
  );
}


export default App;
