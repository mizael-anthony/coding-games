import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Temperatures } from './puzzles/temperatures'
import { PuzzleProps } from './types/exercises'
import Puzzles from './pages/Puzzles'
import { Horses } from './puzzles/horses'

const puzzles : PuzzleProps[] = [
  Temperatures,
  Horses

]

function App() {

  return (
    <div className="App">

        <section>
          <div>
            <h1>Coding Games</h1>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </section>
        
        <section>
          <Puzzles puzzles={puzzles} />
        </section>

    </div>
  )
}

export default App
