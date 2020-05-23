import {$} from '@core/Dom'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    // const $root = document.createElement('div')
    // $root.classList.add('excel')

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      // const $el = document.createElement('div')
      // $el.classList.add(Component.className)
      const component = new Component($el)
      // DEBUG
      if (component.name) {
        window['c' + component.name] = component
      }
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    // $root.insertAdjacentHTML('beforeend', component.toHTML())
    // console.log(component.toHTML())
    // $root.textContent = 'test'
    // $root.style.fontSize = '5rem'
    return $root
  }
  render() {
    // console.log(this.$el)
    // afterbegin, afterend, beforeend, beforebegin
    // this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
    // const node = document.createElement('h1')
    // node.textContent = 'TEST'
    this.$el.append(this.getRoot())
    
    this.components.forEach(component => component.init())
  }
}
