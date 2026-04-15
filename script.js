const html = document.documentElement
const img = document.querySelector("#profile img")

function initTheme() {
  const temaSalvo = localStorage.getItem("theme")

  if (temaSalvo === "light") {
    html.classList.add("light")
    img.src = "./assets/avatar2.png.jpeg"
  } else {
    img.src = "./assets/avatar.png.jpeg"
  }
}

function toggleMode() {
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.src = "./assets/avatar2.png.jpeg"
    localStorage.setItem("theme", "light")
  } else {
    img.src = "./assets/avatar.png.jpeg"
    localStorage.setItem("theme", "dark")
  }
}
