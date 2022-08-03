
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/pages/Home';
import List from './components/List/List';
import Hotel from './components/hotel/Hotel';

function App() {
  return (
   
  

    <Router>
     
      <Routes>
      <Route path="/" element={<Home/>} />

        <Route path="/Home" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/Hotel" element={<Hotel/>} />

     
      </Routes>
     
    </Router>
  );
  }
  
  export default App;
  
  
  



     
