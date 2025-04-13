const thumbnails = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Change main image
    mainImage.src = thumb.src;

    // Update active thumbnail
    thumbnails.forEach((img) => img.classList.remove("active"));
    thumb.classList.add("active");
  });
});
