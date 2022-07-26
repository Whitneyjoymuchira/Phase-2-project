import react from 'react';
import './App.css';
import Error from './Components/Error';
import Home from './Components/Home';
import {Room} from './Components/Room';
import SingleRooms from './Components/SingleRooms';

import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';

function App() {
 
  return (
    <>
    <Routes>
    <Route  exact path="/" element={<Home />} />
   <Route exact path='/room/:roomsy' element={<SingleRooms />} />
   <Route exact path='/room/' element={<Room/>} />
   </Routes>
</>



  );
}

export default App
