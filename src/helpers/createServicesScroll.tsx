import { RefObject } from 'react';

export function createServicesScroll(pageElement: RefObject<HTMLElement>) {
  let yOffset;

  if (window.innerWidth < 767.98) {
    yOffset = 600
  }
  else if (window.innerWidth < 991.98) {
    yOffset = 700
  }
  else if (window.innerWidth < 1119.98) {
    yOffset = 1000
  }
  else {
    yOffset = 1100
  }

  const element = pageElement.current
  if (element !== null) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}







