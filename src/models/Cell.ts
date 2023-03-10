/* eslint-disable import/no-cycle */
import { Board } from './Board'
import { Figure } from './figures/Figure'
import { Colors } from './Colors'

export class Cell {
  readonly x: number
  readonly y: number
  readonly color: Colors
  figure: Figure | null
  board: Board
  available: boolean // Может ли переместиться фигура или нет
  id: number

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x
    this.y = y
    this.color = color
    this.figure = figure
    this.board = board
    this.available = false
    this.id = Math.random()
  }
}
