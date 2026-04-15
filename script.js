function toggleMode() {
  const html = document.documentElement
  const img = document.getElementById("avatar")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.src = "./assets/avatar2.png.jpeg"
    localStorage.setItem("theme", "light")
  } else {
    img.src = "./assets/avatar.png.jpeg"
    localStorage.setItem("theme", "dark")
  }
}

// Corrige ao carregar a página
window.onload = function () {
  const temaSalvo = localStorage.getItem("theme")
  const img = document.getElementById("avatar")

  if (temaSalvo === "light") {
    document.documentElement.classList.add("light")
    img.src = "./assets/avatar2.png.jpeg"
  } else {
    img.src = "./assets/avatar.png.jpeg"
  }
}
