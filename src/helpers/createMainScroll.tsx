import { RefObject } from 'react';

export function createMainScroll(pageElement: RefObject<HTMLElement>) {
  const yOffset = 1100

  const element = pageElement.current
  if (element !== null) {
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: 'smooth' })
  // element.removeEventListener('click', createMainScroll)
  }
}
