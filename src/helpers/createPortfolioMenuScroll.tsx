import { RefObject } from 'react';
export function createPortfolioMenuScroll(pageElement: RefObject<HTMLElement>) {
  const yOffset = -310

  const element = pageElement.current
  if (element !== null) {
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: 'smooth' })
  // element.removeEventListener('click', createPortfolioMenuScroll)
  // element.preventDefault()
  }
}
