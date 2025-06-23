// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Future modal popup (can be replaced with actual form)
document.querySelectorAll(".cta-button").forEach(button => {
  button.addEventListener("click", () => {
    console.log("CTA button clicked!");
    // In future: open modal or form
  });
});
