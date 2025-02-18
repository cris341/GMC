document.addEventListener("DOMContentLoaded", () => {
  // Function to load content based on the path
  const loadContent = (path) => {
    fetch(`/components/${path}.html`)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("component").innerHTML = data;

        // Agregar event listeners a los enlaces después de cargar el contenido

        const homeLink = document.getElementById("homeLink");
        const groupLink = document.getElementById("groupLink");
        const researchLink = document.getElementById("researchLink");
        const membersLink = document.getElementById("membersLink");
        const proyectsLink = document.getElementById("proyectsLink");
        const laboratoriesLink = document.getElementById("laboratoriesLink");
        const rubyMejiaLink = document.getElementById("rubyMejiaLink");
        const joseMinaLink = document.getElementById("joseMinaLink");
        const monicaCaiscedoLink =
          document.getElementById("monicaCaiscedoLink");
        const silvioDelvastoLink =
          document.getElementById("silvioDelvastoLink");

        if (homeLink) {
          homeLink.addEventListener("click", () => {
            window.location.hash = "home";
          });
        }

        if (groupLink) {
          groupLink.addEventListener("click", () => {
            window.location.hash = "group";
          });
        }

        if (researchLink) {
          researchLink.addEventListener("click", () => {
            window.location.hash = "research";
          });
        }

        if (membersLink) {
          membersLink.addEventListener("click", () => {
            window.location.hash = "members";
          });
        }

        if (proyectsLink) {
          proyectsLink.addEventListener("click", () => {
            window.location.hash = "proyects";
          });
        }

        if (laboratoriesLink) {
          laboratoriesLink.addEventListener("click", () => {
            window.location.hash = "laboratories";
          });
        }

        if (rubyMejiaLink) {
          rubyMejiaLink.addEventListener("click", () => {
            window.location.hash = "rubyMejia";
          });
        }
        if (joseMinaLink) {
          joseMinaLink.addEventListener("click", () => {
            window.location.hash = "joseMina";
          });
        }

        if (monicaCaiscedoLink) {
          monicaCaiscedoLink.addEventListener("click", () => {
            window.location.hash = "monicaCaiscedo";
          });
        }

        if (silvioDelvastoLink) {
          silvioDelvastoLink.addEventListener("click", () => {
            window.location.hash = "silvioDelvasto";
          });
        }
      });
  };

  // Initial load based on URL hash or default path
  const path = window.location.hash ? window.location.hash.slice(1) : "home";
  loadContent(path);

  // Update content when hash changes
  window.addEventListener("hashchange", () => {
    const newPath = window.location.hash.slice(1);
    loadContent(newPath);
  });
});

function cambiarhash(hash) {
  window.location.hash = hash;
}
// Función para marcar el enlace activo
function setActiveLink() {
  console.log("se ejecuta");

  const hash = window.location.hash || "#home";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    if (link.id == hash) {
      link.classList.remove("text-slate-500");
      link.classList.add("text-red-600", "font-bold");
    } else {
      link.classList.remove("text-red-600", "font-bold");
      link.classList.add("text-slate-500");
    }
  });
}

// Ejecutar la función cuando la página se carga y cuando cambia el hash
window.addEventListener("hashchange", setActiveLink);
window.addEventListener("DOMContentLoaded", setActiveLink);

fetch("partials/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });
