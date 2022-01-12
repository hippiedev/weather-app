import './App.css';
import HomePage from './pages/Home';
import {Routes, BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
