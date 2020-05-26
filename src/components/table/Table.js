import {ExcelComponent} from '../../core/ExcelComponent'
import {createTable} from './table.template'
import {resizeHandler} from './table.resize'
import {shouldResuze} from './table.functions'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(40)
  }

  onMousedown(event) {
    if (shouldResuze(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
