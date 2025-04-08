// script.js
function extractText() {
    alert("Text extraction functionality goes here.");
}

function downloadText() {
    const text = "Extracted text content here.";
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "extracted_text.txt";
    link.click();
}
