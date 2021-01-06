import logo from './logo.svg';
import './App.css';
import { VideoGameGrid } from "./VideoGameGrid";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Have you played the best video games over the years</p>
      </header>
      <main className="App-main">
        <VideoGameGrid />
      </main>
    </div>
  );
}


export default App;
