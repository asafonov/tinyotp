document.addEventListener("DOMContentLoaded", function(event) {
  qrCodeReader = new QRCodeReaderView(v => alert(JSON.stringify(v.data)))
  qrCodeReader.scan()
});
