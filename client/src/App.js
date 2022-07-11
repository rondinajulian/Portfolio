import {BrowserRouter, Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ContactMe from './components/ContactMe/ContactMe';
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contactme" element={<ContactMe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

