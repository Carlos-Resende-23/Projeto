document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  function applyTheme() {
    const temaSalvo = localStorage.getItem("theme")

    if (temaSalvo === "light") {
      html.classList.add("light")
      img.src = "./assets/avatar2.png.jpeg"
    } else {
      html.classList.remove("light")
      img.src = "./assets/avatar.png.jpeg"
    }
  }

  applyTheme()

  window.toggleMode = function () {
    html.classList.toggle("light")

    if (html.classList.contains("light")) {
      img.src = "./assets/avatar2.png.jpeg"
      localStorage.setItem("theme", "light")
    } else {
      img.src = "./assets/avatar.png.jpeg"
      localStorage.setItem("theme", "dark")
    }
  }
})
