const html = document.documentElement
const img = document.querySelector("#profile img")

// aplicar tema salvo ao carregar
const temaSalvo = localStorage.getItem("theme")
if (temaSalvo === "light") {
  html.classList.add("light")
  img.setAttribute("src", "./assets/avatar2.png.jpeg")
} else {
  img.setAttribute("src", "./assets/avatar.png.jpeg")
}

function toggleMode() {
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2.png.jpeg")
    localStorage.setItem("theme", "light")
  } else {
    img.setAttribute("src", "./assets/avatar.png.jpeg")
    localStorage.setItem("theme", "dark")
  }
}
