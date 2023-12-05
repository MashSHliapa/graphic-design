export function createPortfolioMenuScroll(pageElement: unknown) {
  const yOffset = -350

  const element = pageElement.current
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: 'smooth' })
  element.removeEventListener('click', createPortfolioMenuScroll)
}
