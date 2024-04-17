import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartPage from './pages/StartPage/StartPage'
import TicTacToe from './pages/TicTacToe/TicTacToe'
import Bingo from './pages/Bingo/Bingo'



function App() {
 

  return (
      <div className='App'>
         <Routes>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/ticTacToe' element={<TicTacToe/>}/>
          <Route path='/bingo' element={<Bingo/>}/>
          <Route path='*' element={<StartPage/>}/>
         </Routes>
      </div>

  )
}

export default App
