const menuButton = document.getElementById("menu-open");
const sidebar = document.getElementById("mobile-sidebar");

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.classList.add("hidden");
  }
});
