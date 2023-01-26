import { useEffect, useState } from 'react'
import classes from './App.module.sass'
import BoardComponent from '../BoardComponent/BoardComponent'
import { Board } from '../../models/Board'

function App() {
  const [board, setBoard] = useState(new Board())

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  useEffect(() => {
    restart()
  }, [])

  return (
    <div className={classes.app}>
      <BoardComponent
        board={board}
        setBoard={setBoard}></BoardComponent>
    </div>
  )
}

export default App
