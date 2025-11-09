document.addEventListener('DOMContentLoaded', function () {

  window.scrollTo(0, 0);

 
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

//STILL HAVE TO REPLACE ALL IMAGE LINKS WITH, REAL WORKKING ONES!
const projects = [
  {
    title: "Random Quote Generator",
    description: "Generates random quotes with each click, providing fresh inspiration every time.",
    image: "images/quote-gen.jpg",
    liveLink: "https://talha-on-git.github.io/Random-Quote-Gen/"
  },
  {
    title: "To-Do App",
    description: "A simple to-do list app for adding, editing, and deleting tasks.",
    image: "images/todo-app.jpg",
    liveLink: "https://your-link-here"
  },
  {
    title: "Matrix cryptographer",
    description: "Displays current weather and forecasts for any city.",
    image: "images/weather-app.jpg",
    liveLink: "https://talha-on-git.github.io/Matrix-Cryptographer/"
  },
  {
    title: "E-commerce Store",
    description: "A simple e-commerce store for buying and selling products.",
    image: "images/ecommerce-store.jpg",
    liveLink: "https://e-commerce-app-delta-beryl.vercel.app/"
  },
  {
    title: "Calorie Counter",
    description: "A calorie counter for tracking daily calorie intake.",
    image: "images/calorie-counter.jpg",
    liveLink: "https://talha-on-git.github.io/Calorie-Counter/"
  },
  {
    title: "US Number Checker",
    description: "A tool for checking if a US phone number is valid.",
    image: "images/us-number-checker.jpg",
    liveLink: "https://talha-on-git.github.io/US-Number-Checker/"
  },
  {
    title: "Palindrome Checker",
    description: "A tool for checking if a string is a palindrome.",
    image: "images/palindrome-checker.jpg",
    liveLink: "https://talha-on-git.github.io/Palindrome-Checker/"
  },
  {
    title: "Daraz Clone (design)",
    description: "A clone of Daraz's old website build to practice CSS",
    image: "images/daraz-clone.jpg",
    liveLink: "https://talha-on-git.github.io/Daraz-UI-Clone/"
  },
  {
    title: "Roman Numeral Converter",
    description: "A tool for converting numbers to Roman numerals.",
    image: "images/roman-numeral-converter.jpg",
    liveLink: "https://talha-on-git.github.io/Roman-Numerals-Converter/"
  }
  
];



const projectsContainer = document.getElementById("projects");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-cards");

  card.innerHTML = `
    <div class="img-div">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <h5 class="project-heading">${project.title}</h5>
    <p class="project-text">${project.description}</p>
    <p><a href="${project.liveLink}" class="live-text" target="_blank">
      <span class="material-symbols-outlined live-icon">visibility</span> Live
    </a></p>
  `;

  projectsContainer.appendChild(card);
});




