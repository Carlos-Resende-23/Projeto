function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar o avatar 2
    img.setAttribute("src", "./assets/avatar2.png.jpeg")
  } else {
    // se tiver sem light mode manter a original
    img.setAttribute("src", "./assets/avatar.png.jpeg")
  }
}
