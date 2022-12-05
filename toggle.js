function toggleFont() {
    var body = document.getElementsByTagName("body")[0];
    var font = body.style.fontFamily;
    if (font == "dyslexia") {
    body.style.fontFamily = "sans-serif";
    } else {
    body.style.fontFamily = "dyslexia";
    }
}