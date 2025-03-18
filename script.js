function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function hideModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
