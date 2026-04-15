function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#avatar img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2.png.jpeg")
    localStorage.setItem("theme", "light")
  } else {
    img.setAttribute("src", "./assets/avatar.png.jpeg")
    localStorage.setItem("theme", "dark")
  }
}

const temaSalvo = localStorage.getItem("theme")
const html = document.documentElement
const img = document.querySelector("#avatar img")

if (temaSalvo === "light") {
  html.classList.add("light")
  img.setAttribute("src", "./assets/avatar2.png.jpeg")
}
