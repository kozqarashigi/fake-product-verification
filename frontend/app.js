document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("verificationSection").style.display = "block";
  this.style.display = "none"; // Hide the start button after click
});

async function verifyProduct() {
  console.log("Verify button clicked");

  const input = document.getElementById("productIdInput").value;
  const resultDiv = document.getElementById("result");

  try {
    const response = await fetch('../data/blockchain.json'); // <-- path fix
    const blockchainData = await response.json();

    const product = blockchainData.find(p => p.productId === input);

    if (product) {
      resultDiv.innerHTML = `
         <strong>Product Found!</strong><br>
        Name: ${product.productName}<br>
        Manufacturer: ${product.manufacturer}<br>
        Origin: ${product.origin}<br>
        Authentic: ${product.authentic ? " Yes" : " No"}
      `;
    } else {
      resultDiv.innerHTML = ` <strong>Product not found!</strong> This might be a fake.`;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    resultDiv.innerHTML = ` <strong>Error fetching product data.</strong>`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  if (productId) {
    document.getElementById("product-id").value = productId;
    document.getElementById("verify-button").click(); // auto-verify
  }
});

function generateQRCode() {
    const productId = document.getElementById("productIdInput").value.trim();
    if (!productId) {
        alert("Enter a Product ID first");
        return;
    }

    const currentURL = window.location.origin + "/frontend/index.html?productId=" + encodeURIComponent(productId);

    // Clear previous QR code
    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: currentURL,
        width: 200,
        height: 200,
    });
}
