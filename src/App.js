import react from 'react';
import './App.css';
import Error from './Components/Error';
import Home from './Components/Home';
import { Room } from './Components/Room';
import SingleRooms from './Components/SingleRooms';

function App() {
  return (
    <div className="App">
<Error />
<Home/>
<Room />
<SingleRooms />
      
    </div>
  );
}

export default App;
