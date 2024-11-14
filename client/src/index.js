// Get references to the menu button and sidebar
const menuButton = document.getElementById("menu-open");
const sidebar = document.getElementById("mobile-sidebar");

// Toggle sidebar visibility when the menu button is clicked
menuButton.onclick = () => {
  sidebar.classList.toggle("hidden");
};

// For Hide the sidebar
document.onclick = (event) => {
  // if click outside the sidebar
  const clickedOutside =
    !sidebar.contains(event.target) && !menuButton.contains(event.target);

  // If click outside side bar willbe hidden

  if (clickedOutside) {
    sidebar.classList.add("hidden");
  }
};
