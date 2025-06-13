document.addEventListener("DOMContentLoaded", () => {
  // Carregar o conteúdo da Master Page
  fetch("master.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("master-content").innerHTML = data
      initializeDropdowns()
    })
    .catch((error) => console.error("Erro ao carregar a Master Page:", error))

  // Inicializar dropdowns para dispositivos móveis
  function initializeDropdowns() {
    if (window.innerWidth <= 768) {
      const dropdowns = document.querySelectorAll(".dropdown")

      dropdowns.forEach((dropdown) => {
        const link = dropdown.querySelector(".nav-link")

        link.addEventListener("click", function (e) {
          e.preventDefault()
          const content = this.nextElementSibling

          // Fecha todos os outros dropdowns
          dropdowns.forEach((d) => {
            if (d !== dropdown) {
              d.querySelector(".dropdown-content").style.display = "none"
            }
          })

          // Alterna a visibilidade do dropdown atual
          if (content.style.display === "block") {
            content.style.display = "none"
          } else {
            content.style.display = "block"
          }
        })
      })
    }
  }

  // Adicionar comportamento aos botões
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-primary")) {
      alert("Redirecionando para mais informações...")
    } else if (e.target.classList.contains("btn-secondary")) {
      alert("Redirecionando para o suporte...")
    }
  })

  // Detectar mudanças de tamanho da tela para ajustar o comportamento dos dropdowns
  window.addEventListener("resize", () => {
    initializeDropdowns()
  })
})
