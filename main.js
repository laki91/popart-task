document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger-btn");
  const nav = document.querySelector(".main-nav");

  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".why-item");

  const showOnScroll = (entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("animate-in")) {
      el.classList.add("animate-in");
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(showOnScroll);
    },
    {
      threshold: 0.3,
    }
  );

  items.forEach((item) => observer.observe(item));
});
