export function createMainScroll(pageElement: unknown) {
  const yOffset = 1100

  const element = pageElement.current
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: 'smooth' })
  element.removeEventListener('click', createMainScroll)
}
