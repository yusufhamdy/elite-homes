// Close the mobile menu after choosing a link
const mobileMenu = document.getElementById("mobileMenu");

document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    bootstrap.Collapse.getOrCreateInstance(mobileMenu).hide();
  });
});

// The forms are only a design, so submitting them should not reload the page
document.querySelectorAll("[data-static-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
