#  Fake Product Identification System  
**Ulzhan Tamyzgazina — SE-2325**

##  Screenshots

### Main Interface  
![Main Interface](screens/1.png)

### Product Verified with QR Code  
![QR Verified](screens/2.png)

![QR Verified](screens/3.png)

##  Description

This web-based project helps users verify the authenticity of a product using a product ID and QR code. It simulates how a real-world blockchain-powered verification system might work, where products have QR codes embedded that direct users to verify data stored on a secure backend.

Users can:
- Enter a product ID to check its authenticity.
- Generate a QR code that links to the verification page.
- Scan the QR code to quickly verify using a mobile device.

##  Folder Structure
project-root/
│
├── contracts/
│ └── ProductVerification.sol
│
├── data/
│ └── blockchain.json
│
├── frontend/
│ ├── index.html
│ ├── app.js
│ ├── style.css
│ ├── abi.json
│
├── qr/
│ ├── qrcode.html
│ └── qrcode.js
│
├── screens/
│ ├── 1.png
│ └── 2.png
│
└── README.md

## Technologies Used
- HTML5, CSS3, JavaScript
- QRCode.js (via CDN)
- JSON (as fake blockchain data)
- Visual Studio Code + Live Server






