var sidenav = document.querySelector(".side-navbar")
function shownav() {
    sidenav.style.left = "0"
}
function closenav(){
    sidenav.style.left = "-60%"
}
const fullText = `When I'm not coding, I enjoy exploring new technologies. 
Learning about design trends. 
And collaborating with others to solve challenging problems. 
Let's work together to create something amazing!`;

const sentences = fullText.split('.').map(s => s.trim()).filter(s => s.length > 0);
const container = document.getElementById('text-container');

sentences.forEach((sentence, i) => {
  const p = document.createElement('p');
  p.classList.add('sentence');
  p.textContent = sentence + '.';
  container.appendChild(p);

  setTimeout(() => {
    p.classList.add('visible');
  }, i * 1000); // delay for each sentence
});

/* Frontpage */

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.gallery-button');
    button.addEventListener('click', () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
  });

// Form submission handling
  // Only show popup after redirect
  window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      const popup = document.getElementById("popup");
      popup.classList.add("show");
      setTimeout(() => {
        popup.classList.remove("show");
      }, 4000); // Hide after 4 seconds
    }
  });



