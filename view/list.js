class ListView {
  constructor() {
    this.model = new List()
    this.container = document.querySelector('.content')
    asafonov.messageBus.subscribe(asafonov.events.LIST_UPDATED, this, 'onListUpdate')
  }

  onListUpdate (data) {
    this.container.innerHTML = ''
    const ul = document.createElement('ul')
    this.container.appendChild(ul)

    for (let item of data) {
      const li = document.createElement('li')
      li.innerHTML = item.provider
      ul.appendChild(li)
    }
  }

  destroy() {
    this.model.destroy()
    this.model = null
    this.container = null
    asafonov.messageBus.unsubscribe(asafonov.events.LIST_UPDATED, this, 'onListUpdate')
  }
}
