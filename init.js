document.addEventListener("DOMContentLoaded", function(event) {
  const test = async v => {
    const totp = new TOTP()
    const url = v.data
    alert(`url ${url}`)
    const parsedData = totp.parseData(url)
    alert(`data ${JSON.stringify(parsedData)}`)
    const otp = await totp.generateTOTP(parsedData.secret)
    alert(`otp ${otp}`)
  }

  qrCodeReader = new QRCodeReaderView(test)
  qrCodeReader.scan()
});
