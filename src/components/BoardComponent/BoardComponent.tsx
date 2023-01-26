/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react'
import { Board } from '../../models/Board'
import { Cell } from '../../models/Cell'
import classes from '../App/App.module.sass'
import CellComponent from '../CellComponent/CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    cell.figure && setSelectedCell(cell)
  }

  return (
    <div className={classes.board}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              click={click}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default BoardComponent
