import { Routes, Route } from 'react-router-dom';
import Room from './Room';
import Home from './Home';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/room/:roomId" element={<Room />}></Route>
      </Routes>
    </>

  );
}


export default App;
