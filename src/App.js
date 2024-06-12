import './App.css';
import Navbar from './components/Navbar.js';
import Textbox from './components/Textbox.js';

function App() {
  return (
    <>
    <div className="main bg-green-300 h-screen">
      <Navbar/>
      <Textbox/>
    </div>
    </>
  );
}

export default App;
