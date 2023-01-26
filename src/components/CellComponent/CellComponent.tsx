import { Cell } from '../../models/Cell'
import classes from '../App/App.module.sass'

interface CellPrors {
  cell: Cell
}
const CellComponent: React.FC<CellPrors> = ({ cell }) => {
  return (
    <div className={[classes.cell, classes[`${cell.color}`]].join(' ')}>
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
