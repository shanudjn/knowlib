
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Topics } from './components/Topics/Topics'
import { Home } from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Topics />
      <Home />
    </div>
  );
}

export default App;
