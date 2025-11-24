document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("active");
  });

  document.querySelectorAll("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("active");
    });
  });
});

const projects = [
  {
    title: "Random Quote Generator",
    description:
      "Generates random quotes with each click, providing fresh inspiration every time.",
    image: "images/quote-gen.jpg",
    liveLink: "https://talha-on-git.github.io/Random-Quote-Gen/",
  },
  {
    title: "To-Do App",
    description:
      "A simple to-do list app for adding, editing, and deleting tasks.",
    image: "images/todo-app.jpg",
    liveLink: "https://your-link-here",
  },
  {
    title: "Matrix cryptographer",
    description: "Displays current weather and forecasts for any city.",
    image: "images/cryptographer.jpg",
    liveLink: "https://talha-on-git.github.io/Matrix-Cryptographer/",
  },
  {
    title: "E-commerce Store",
    description: "A simple e-commerce store for buying and selling products.",
    image: "images/ecommerce-app.jpg",
    liveLink: "https://e-commerce-app-delta-beryl.vercel.app/",
  },
  {
    title: "Calorie Counter",
    description: "A calorie counter for tracking daily calorie intake.",
    image: "images/calorie-counter.jpg",
    liveLink: "https://talha-on-git.github.io/Calorie-Counter/",
  },
  {
    title: "US Number Checker",
    description: "A tool for checking if a US phone number is valid.",
    image: "images/us-number-checker.jpg",
    liveLink: "https://talha-on-git.github.io/US-Number-Checker/",
  },
  {
    title: "Palindrome Checker",
    description: "A tool for checking if a string is a palindrome.",
    image: "images/palindrome-checker.jpg",
    liveLink: "https://talha-on-git.github.io/Palindrome-Checker/",
  },
  {
    title: "Daraz Clone (design)",
    description: "A clone of Daraz's old website build to practice CSS",
    image: "images/daraz-ui-clone.jpg",
    liveLink: "https://talha-on-git.github.io/Daraz-UI-Clone/",
  },
  {
    title: "Roman Numeral Converter",
    description: "A tool for converting numbers to Roman numerals.",
    image: "images/roman-numeral.jpg",
    liveLink: "https://talha-on-git.github.io/Roman-Numerals-Converter/",
  },
];

let currentIndex = 0;
const anime = window.anime;

function initCarousel() {
  const track = document.getElementById("carouselTrack");
  track.innerHTML = "";
  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
            <div class="project-image">
              <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <a href="${project.liveLink}" target="_blank" class="project-link">View Project →</a>
            </div>
        `;
    track.appendChild(card);
  });
  updateCarousel();
}

function updateCarousel() {
  const cards = document.querySelectorAll(".project-card");
  const totalCards = cards.length;

  cards.forEach((card, index) => {
    card.classList.remove("center", "side");

    let position = (index - currentIndex + totalCards) % totalCards;

    if (position > totalCards / 2) {
      position -= totalCards;
    }

    if (position === 0) {
      card.classList.add("center");
    } else if (Math.abs(position) === 1) {
      card.classList.add("side");
    }

    card.style.display = Math.abs(position) <= 1 ? "block" : "none";
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % projects.length;
  updateCarousel();
  animateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  updateCarousel();
  animateCarousel();
}

function animateCarousel() {
  anime({
    targets: ".project-card",
    opacity: [0.3, 1],
    duration: 500,
    easing: "easeInOutQuad",
  });
}

const fields = ["Web Developer", "Full Stack Engineer", "Data Scientist"];
let fieldIndex = 0;

function animateField() {
  const fieldText = document.querySelector(".field-text");

  anime({
    targets: fieldText,
    opacity: [1, 0],
    duration: 500,
    easing: "easeInOutQuad",
    complete: () => {
      fieldIndex = (fieldIndex + 1) % fields.length;
      fieldText.textContent = fields[fieldIndex];
      anime({
        targets: fieldText,
        opacity: [0, 1],
        duration: 500,
        easing: "easeInOutQuad",
      });
    },
  });
}

setInterval(animateField, 3000);

const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(savedTheme + "-mode");
  updateThemeIcon(savedTheme === "light");
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.body.classList.remove(currentTheme + "-mode");
  document.body.classList.add(newTheme + "-mode");

  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme === "light");
}

function updateThemeIcon(isLight) {
  themeToggle.innerHTML = isLight
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Contact Form Submitted");
  console.log(name);
  console.log(email);
  console.log(message);

  alert("Thank you for your message! I will get back to you soon.");

  contactForm.reset();
});

function printCertificate() {
  const certPath = "certificates/Talha BWT Cert.pdf";
  const printWindow = window.open(certPath, "_blank", "width=1000,height=1200");

  printWindow.addEventListener("load", () => {
    printWindow.print();
  });

  setTimeout(() => {
    printWindow.print();
  }, 1000);
}

document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);

themeToggle.addEventListener("click", toggleTheme);

document.querySelectorAll(".timeline-marker").forEach((marker) => {
  marker.addEventListener("click", function () {
    anime({
      targets: this,
      scale: [1, 1.3, 1],
      duration: 600,
      easing: "easeInOutElastic(1, .6)",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCarousel();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 600,
          easing: "easeOutQuad",
        });
        observer.unobserve(entry.target);
      }
    });
  });

  document
    .querySelectorAll(".skill-card, .cert-card, .timeline-content")
    .forEach((el) => {
      observer.observe(el);
    });
});

setInterval(() => {
  nextSlide();
}, 5000);
