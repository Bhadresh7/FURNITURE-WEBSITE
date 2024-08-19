const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const linksContainer = document.getElementById("links-container");

menuIcon.addEventListener("click", () => {
  linksContainer.classList.add("open");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  linksContainer.classList.remove("open");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});



document.querySelectorAll(".toggle-dropdown").forEach((item) => {
  item.addEventListener("click", () => {
    const dropdownContent = item.nextElementSibling;
    const isOpen = dropdownContent.classList.contains("show");


    document
      .querySelectorAll(".dropdown-content")
      .forEach((content) => content.classList.remove("show"));

    if (!isOpen) {
      dropdownContent.classList.add("show");
    }
  });
});
