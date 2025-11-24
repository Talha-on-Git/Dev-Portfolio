document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("active");
  });

  // Close menu on link click
  document.querySelectorAll("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("active");
    });
  });
});



// Project Data
const projects = [
  {
    title: "Random Quote Generator",
    description: "Generates random quotes with each click, providing fresh inspiration every time.",
    image: "images/quote-gen.jpg",
    liveLink: "https://talha-on-git.github.io/Random-Quote-Gen/",
  },
  {
    title: "To-Do App",
    description: "A simple to-do list app for adding, editing, and deleting tasks.",
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
]

// Initialize carousel
let currentIndex = 0
const anime = window.anime // Declare the anime variable

function initCarousel() {
  const track = document.getElementById("carouselTrack")
  track.innerHTML = ""
  projects.forEach((project, index) => {
    const card = document.createElement("div")
    card.className = "project-card"
    card.innerHTML = `
            <div class="project-image">
              <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <a href="${project.liveLink}" target="_blank" class="project-link">View Project →</a>
            </div>
        `
    track.appendChild(card)
  })
  updateCarousel()
}

function updateCarousel() {
  const cards = document.querySelectorAll(".project-card")
  const totalCards = cards.length

  cards.forEach((card, index) => {
    card.classList.remove("center", "side")

    // Calculate position relative to current index (showing 3 projects)
    let position = (index - currentIndex + totalCards) % totalCards

    if (position > totalCards / 2) {
      position -= totalCards
    }

    if (position === 0) {
      card.classList.add("center")
    } else if (Math.abs(position) === 1) {
      card.classList.add("side")
    }

    // Hide cards that aren't part of the 3-project view
    card.style.display = Math.abs(position) <= 1 ? "block" : "none"
  })
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % projects.length
  updateCarousel()
  animateCarousel()
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length
  updateCarousel()
  animateCarousel()
}

function animateCarousel() {
  anime({
    targets: ".project-card",
    opacity: [0.3, 1],
    duration: 500,
    easing: "easeInOutQuad",
  })
}

// Infinite field animation in hero
const fields = ["Web Developer", "Full Stack Engineer", "Data Scientist"]
let fieldIndex = 0

function animateField() {
  const fieldText = document.querySelector(".field-text")

  anime({
    targets: fieldText,
    opacity: [1, 0],
    duration: 500,
    easing: "easeInOutQuad",
    complete: () => {
      fieldIndex = (fieldIndex + 1) % fields.length
      fieldText.textContent = fields[fieldIndex]
      anime({
        targets: fieldText,
        opacity: [0, 1],
        duration: 500,
        easing: "easeInOutQuad",
      })
    },
  })
}

setInterval(animateField, 3000)

// Theme toggle
const themeToggle = document.getElementById("themeToggle")
const htmlElement = document.documentElement

function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark"
  document.body.classList.add(savedTheme + "-mode")
  updateThemeIcon(savedTheme === "light")
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light"
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.body.classList.remove(currentTheme + "-mode")
  document.body.classList.add(newTheme + "-mode")

  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme === "light")
}

function updateThemeIcon(isLight) {
  themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'
}

// Contact form
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const formData = new FormData(this)

  // Simulate email send (in production, use a backend service)
  console.log("Form submitted:", {
    name: this.elements[0].value,
    email: this.elements[1].value,
    message: this.elements[2].value,
  })

  alert("Thank you for your message! I will get back to you soon.")
  this.reset()
})

// Print certificate
function printCertificate(certName) {
  // Create file input for certificate PDF/image
  const fileInput = document.createElement("input")
  fileInput.type = "file"
  fileInput.accept = ".pdf,.jpg,.jpeg,.png"
  fileInput.onchange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const printWindow = window.open("", "", "width=900,height=1200")
        if (file.type.includes("pdf")) {
          // For PDFs, open in new window
          printWindow.location.href = event.target.result
        } else {
          // For images, display in iframe
          printWindow.document.write(`
            <html>
            <head>
              <title>${certName}</title>
              <style>
                body { margin: 0; padding: 20px; background: #f5f5f5; }
                img { max-width: 100%; height: auto; display: block; margin: auto; }
                .container { background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
              </style>
            </head>
            <body>
              <div class="container">
                <img src="${event.target.result}" alt="${certName}">
              </div>
            </body>
            </html>
          `)
          printWindow.document.close()
          setTimeout(() => printWindow.print(), 500)
        }
      }
      reader.readAsDataURL(file)
    }
  }
  fileInput.click()
}

// Smooth scroll navigation
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     const href = this.getAttribute("href")
//     if (href !== "#") {
//       e.preventDefault()
//     }
//   })
// })

// Carousel button listeners
document.getElementById("prevBtn").addEventListener("click", prevSlide)
document.getElementById("nextBtn").addEventListener("click", nextSlide)

// Theme toggle listener
themeToggle.addEventListener("click", toggleTheme)

// Timeline hover animation
document.querySelectorAll(".timeline-marker").forEach((marker) => {
  marker.addEventListener("click", function () {
    anime({
      targets: this,
      scale: [1, 1.3, 1],
      duration: 600,
      easing: "easeInOutElastic(1, .6)",
    })
  })
})

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  initTheme()
  initCarousel()

  // Animate skill cards on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 600,
          easing: "easeOutQuad",
        })
        observer.unobserve(entry.target)
      }
    })
  })

  document.querySelectorAll(".skill-card, .cert-card, .timeline-content").forEach((el) => {
    observer.observe(el)
  })
})

// Auto-advance carousel every 5 seconds
setInterval(() => {
    nextSlide()
}, 5000)
