document.addEventListener("DOMContentLoaded", function(event) {
  const test = v => {
    const totp = new TOTP()
    const url = v.data
    alert(`url ${url}`)
    const parsedData = totp.parsedData(url)
    alert(`data ${JSON.stringify(parsedData)}`)
    const otp = totp.generateTOTP(parsedData.secret)
    alert(`otp ${otp}`)
  }

  qrCodeReader = new QRCodeReaderView(test)
  qrCodeReader.scan()
});
