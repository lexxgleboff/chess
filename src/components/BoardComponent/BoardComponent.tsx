import React from 'react'
import { Board } from '../../models/Board'
import classes from '../App/App.module.sass'
import CellComponent from '../CellComponent/CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className={classes.board}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default BoardComponent
