document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".product-sidebar");
  
    if (window.innerWidth <= 768) {
      sidebar.addEventListener("click", () => {
        sidebar.classList.toggle("active");
      });
    }
  });
  