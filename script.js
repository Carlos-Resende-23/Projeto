const temaSalvo = localStorage.getItem("theme")
const img = document.getElementById("avatar")

if (temaSalvo === "light") {
  document.documentElement.classList.add("light")
  if (img) img.src = "./assets/avatar2.png.jpeg"
}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.getElementById("avatar")

  if (html.classList.contains("light")) {
    img.src = "./assets/avatar2.png.jpeg"
    localStorage.setItem("theme", "light")
  } else {
    img.src = "./assets/avatar.png.jpeg"
    localStorage.setItem("theme", "dark")
  }
}
