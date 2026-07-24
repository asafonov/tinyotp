class Clipboard {

  constructor() {
  }

  copy (text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        console.log("success");
      }).catch((e)=> {
        console.log(e);
      });
    } else { //Apple=Shit
      const input = document.createElement('input')
      input.contentEditable = true
      input.readOnly = false
      input.value = text
      this.element.appendChild(input)
      const range = document.createRange()
      range.selectNodeContents(input)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      input.setSelectionRange(0, 99)
      document.execCommand('copy')
      this.element.removeChild(input)
    }

    try {
      if (NativeAndroid !== null && NativeAndroid !== undefined) {
        NativeAndroid.copyToClipboard(text);
      }
    } catch (e) {
    }
  }

}
