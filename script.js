/* ==========================================================
   TEMA LIGHT/DARK
========================================================== */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Verifica o tema salvo no localStorage ou define como "dark"
const currentTheme = localStorage.getItem("theme") || "dark";

if (currentTheme === "light") {
  body.classList.add("light-mode");
  themeIcon.classList.replace("bxs-moon", "bxs-sun");
}

// Evento de clique para alternar o tema
themeToggle.addEventListener("click", () => {
  // Animação de rotação
  themeIcon.style.transform = "rotate(360deg)";

  // Alterna o tema
  body.classList.toggle("light-mode");

  // Atualiza ícone e salva preferência
  setTimeout(() => {
    if (body.classList.contains("light-mode")) {
      themeIcon.classList.replace("bxs-moon", "bxs-sun");
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.classList.replace("bxs-sun", "bxs-moon");
      localStorage.setItem("theme", "dark");
    }

    // Reseta rotação
    setTimeout(() => {
      themeIcon.style.transform = "rotate(0deg)";
    }, 50);
  }, 150);
});

/* ==========================================================
   ROLAGEM SUAVE PARA LINKS ÂNCORA
========================================================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
