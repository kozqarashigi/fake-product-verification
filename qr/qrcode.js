// qr/qrcode.js

function onScanSuccess(decodedText, decodedResult) {
  console.log(`QR Code detected: ${decodedText}`);
  
  // Redirect to frontend/index.html with the product ID as a query param
  window.location.href = `../frontend/index.html?productId=${decodedText}`;
}

const html5QrCode = new Html5Qrcode("reader");

html5QrCode.start(
  { facingMode: "environment" },
  {
    fps: 10,
    qrbox: 250
  },
  onScanSuccess
).catch(err => {
  console.error("QR scanning error: ", err);
});
