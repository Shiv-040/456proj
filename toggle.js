/* function toggleFont() {
    var body = document.getElementsByTagName("body")[0];
    var font = body.style.fontFamily;
    if (font == "dyslexia") {
    body.style.fontFamily = "sans-serif";
    } else {
    body.style.fontFamily = "dyslexia";
    }
} */

const isPressed = window.localStorage.getItem('dyslexic') === 'true';
    if(isPressed) {
        document.body.classList.add('dyslexia-mode');
    }
    // set the button to pressed if appropriate
    const toggle = document.getElementById('dyslexia-toggle');
    if(isPressed) {
        toggle.setAttribute('aria-pressed', 'true');
    }
    // toggle dyslexia support
    toggle.addEventListener('click', (e) => {
        let pressed = e.target.getAttribute('aria-pressed') === 'true';
        e.target.setAttribute('aria-pressed', String(!pressed));
        document.body.classList.toggle('dyslexia-mode');
        window.localStorage.setItem('dyslexic', String(!pressed));
    });