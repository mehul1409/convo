import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero.js'
import Main from './Components/Main.js';
import TestimonialsGrid from './Components/Posts.js';
import Friends from './Components/Friends.js';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Main/>
      <TestimonialsGrid/>
    <Friends/>
    </div>
  );
}

export default App;
