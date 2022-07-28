import react from 'react';
import './App.css';
import Error from './Error';
import Home from './Home';
import Room from './Components/Room';
import SingleRoom from './SingleRoom';
import Switch, { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
 
  return (
    
   <>
   <Navbar />
    <Routes>
    <Route  exact path="/" element={Home} />
   <Route exact path='/room/:slug' element={SingleRoom} />
   {/*<Route exact path='/rooms/' element={Rooms} />*/}
   <Route  exact path ='*'element={<Error/>} />
   </Routes>
   </>
   




  );
}

export default App
