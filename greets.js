const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");

openBtn.addEventListener("click", () => {
  envelope.classList.toggle("open");
});
