
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About-us' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
