/*---------------------------------------------------*/
// Filter System
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    projects.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
        card.style.animation = "fadeUp 0.8s forwards";
      } else {
        card.style.display = "none";
      }
    });
  });
});
