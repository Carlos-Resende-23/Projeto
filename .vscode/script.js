function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }
}
