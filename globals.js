window.asafonov = {}
window.asafonov.messageBus = new MessageBus()
window.asafonov.totp = new TOTP()
window.asafonov.events = {
  ITEM_ADDED: 'ITEM_ADDED',
  ITEM_DELETED: 'ITEM_DELETED',
  LIST_UPDATED: 'LIST_UPDATED'
}
window.asafonov.settings = {
}
window.onerror = (msg, url, line) => {
  alert(`${msg} on line ${line}`)
}
