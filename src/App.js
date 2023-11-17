import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Landing } from './components/Landing';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Create_events } from './components/Create_events';
import { Events } from './components/Events';
import { Posts_wall } from './components/Posts_wall';
import { Reset_pass } from './components/Reset_pass';

function App() {
  return (
      <Router>
        <Routes>
        
          <Route path="/" element = {<Landing />} />
          <Route path="/Signup" element = {<Signup />} />
          <Route path="/Login" element = {<Login />} />
          <Route path="/Events" element = {<Events />} />
          <Route path="/Create_events" element = {<Create_events />} />
          <Route path="/Posts_wall" element = {<Posts_wall />} />
          <Route path="/Reset_pass" element = {<Reset_pass />} />
  
        </Routes>
      </Router>
  );
}


export default App;
