// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Active Link on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ===== Theme Toggle =====
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

// ===== Language Toggle (placeholder for future feature) =====
const langToggle = document.getElementById("lang-toggle");
langToggle.addEventListener("click", () => {
  alert("Language toggle coming soon!");
});
/*------------------------------------------------------*/
// ===== Scroll Animation Effect =====
const elements = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

elements.forEach((el) => observer.observe(el));
/*------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const progressEls = document.querySelectorAll('.progress');

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const value = el.dataset.progress; // '90'
        el.style.width = value + '%';
        obs.unobserve(el); // نوقف المراقبة بعد التحريك مرة واحدة
      }
    });
  }, { threshold: 0.25 });

  progressEls.forEach(el => io.observe(el));
});
/*------------------------------------------------------*/
// === Intersection Observer for animations ===
const achievementsItems = document.querySelectorAll(".timeline-item");

const observers = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

achievementsItems.forEach((item) => observer.observe(item));
/*------------------------------------------------------*/
const sectionse = document.querySelectorAll("[data-animate]");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("active");
    }
  });
});
/*------------------------------------------------------*/
document.getElementById("year").textContent = new Date().getFullYear();
/*------------------------------------------------------*/

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("open");
  if (menuBtn.classList.contains("open")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
/*------------------------------------------------------*/
const cursor = document.querySelector('.cursor');

// حركة الماوس
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// عند المرور على الروابط أو الأزرار
document.querySelectorAll('a, button, .btn-primary, .btn-secondary').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('active'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// عند النقر
document.addEventListener('mousedown', () => {
  cursor.classList.add('click');
  setTimeout(() => cursor.classList.remove('click'), 400);
});

