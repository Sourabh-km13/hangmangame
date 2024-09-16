import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import Endgame from './pages/Endgame';
import Lose from './pages/Lose';
import Home from './pages/Home';

function App() {

  return (
      <Routes>
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        <Route path='/end' element={<Endgame/>}/>
        <Route path='/lose' element={<Lose/>}/>
        <Route path='/' element={<Home/>} />
      </Routes>
  )
}

export default App
