document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  const themeToggle = document.querySelector("#theme-toggle")
  const themeSwitch = document.querySelector("#switch")

  function getSavedTheme() {
    try {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme
      }
    } catch (error) {
      console.warn("localStorage indisponível.", error)
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  }

  function setTheme(theme) {
    const isLight = theme === "light"

    html.classList.toggle("light", isLight)
    img.src = isLight ? "./assets/avatar2.png.jpeg" : "./assets/avatar.png.jpeg"
    img.alt = isLight
      ? "Foto de Carlos Resende no tema claro"
      : "Foto de Carlos Resende no tema escuro"

    const label = isLight ? "Ativar modo escuro" : "Ativar modo claro"
    themeToggle.setAttribute("aria-label", label)
    themeToggle.setAttribute("aria-pressed", String(isLight))
    themeSwitch.setAttribute(
      "aria-label",
      `Alternar para ${isLight ? "modo escuro" : "modo claro"}`,
    )

    try {
      localStorage.setItem("theme", theme)
    } catch (error) {
      console.warn("Não foi possível salvar o tema.", error)
    }
  }

  function toggleTheme() {
    const nextTheme = html.classList.contains("light") ? "dark" : "light"
    setTheme(nextTheme)
  }

  setTheme(getSavedTheme())

  themeToggle.addEventListener("click", toggleTheme)

  themeSwitch.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleTheme()
    }
  })
})
