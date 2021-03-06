
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
        </div>

        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
