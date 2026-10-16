const generateBtn = document.getElementById("generateBtn");
const textInput = document.getElementById("textInput");
const qrCodeContainer = document.getElementById("qrCodeContainer");

generateBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    qrCodeContainer.replaceChildren();

    if (!text) {
        qrCodeContainer.textContent = "Please enter text or a URL to generate a QR code.";
        return;
    }
    if (text.length > 2000) {
        qrCodeContainer.textContent = "Input is too long for this generator. Please use 2,000 characters or fewer.";
        return;
    }
    if (typeof QRCode === "undefined") {
        qrCodeContainer.textContent = "QR code library failed to load. Check your internet connection and reload the page.";
        return;
    }

    try {
        new QRCode(qrCodeContainer, {
            text,
            width: 256,
            height: 256,
            colorDark: "#00bcd4",
            colorLight: "#1e1e1e",
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch (error) {
        qrCodeContainer.replaceChildren();
        qrCodeContainer.textContent = "Could not generate this QR code. Try shorter text.";
        console.error(error);
    }
});
