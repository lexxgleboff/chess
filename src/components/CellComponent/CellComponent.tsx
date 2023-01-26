/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Cell } from '../../models/Cell'
import classes from '../App/App.module.sass'

interface CellPrors {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}
const CellComponent: React.FC<CellPrors> = ({ cell, selected, click }) => {
  return (
    <div
      className={[classes.cell, classes[`${cell.color}`], selected ? classes.selected : ''].join(' ')}
      onClick={() => click(cell)}>
      {cell.figure?.logo && (
        <img
          src={cell.figure.logo}
          alt=""
        />
      )}
    </div>
  )
}

export default CellComponent
