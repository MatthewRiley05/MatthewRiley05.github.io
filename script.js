const toggleButton = document.getElementById('toggle');
const icon = document.getElementById('icon');

let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const applyTheme = (theme) => {
    document.documentElement.style.setProperty('--background-color', theme === 'dark' ? 'black' : 'white');
    document.documentElement.style.setProperty('--text-color', theme === 'dark' ? 'white' : 'black');
    document.documentElement.style.setProperty('--border-color', theme === 'dark' ? 'white' : 'black');
    document.documentElement.style.setProperty('--icon-color', theme === 'dark' ? 'white' : 'black');
    document.documentElement.style.setProperty('--shadow-color', theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)');
}

applyTheme(currentTheme); // Apply initial theme

toggleButton.addEventListener('click', () => {
    if (currentTheme === 'light') {
        applyTheme('dark');
        currentTheme = 'dark';
    } else {
        applyTheme('light');
        currentTheme = 'light';
    }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    currentTheme = e.matches ? 'dark' : 'light';
    applyTheme(currentTheme);
});

var font = new FontFaceObserver('Poppins');

font.load().then(function () {
  document.body.style.opacity = '1';
  document.getElementById('loading-animation').style.display = 'none';
});

window.addEventListener('DOMContentLoaded', (event) => {
    let parallaxText = document.getElementById("text");
    let scrollContainer = document.querySelector(".slides");
  
    scrollContainer.addEventListener("scroll", () => {
      let value = scrollContainer.scrollTop;
      parallaxText.style.marginTop = value * 0.3 + "px";
  
      // Adjust the value 100 to the point where you want the text to disappear
      if (value > 900) {
        parallaxText.style.opacity = "0";
      } else {
        parallaxText.style.opacity = "1";
      }
    });
  });