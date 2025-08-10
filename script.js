// Simple typing effect — edit phrases below if you want
const phrases = [
  "Learning Python.",
  "Learning Git & GitHub.",
  "Building web projects.",
  "Exploring ethical hacking."
];

const typedEl = document.getElementById('typed');
let phraseIndex = 0, charIndex = 0, forward = true;

function tick(){
  const current = phrases[phraseIndex];
  if (forward){
    charIndex++;
    typedEl.textContent = current.slice(0,charIndex);
    if (charIndex === current.length){ forward = false; setTimeout(tick,900); return; }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0,charIndex);
    if (charIndex === 0){ forward = true; phraseIndex = (phraseIndex+1) % phrases.length; }
  }
  setTimeout(tick, forward ? 80 : 35);
}

// start once DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  tick();
});
