import { RefObject } from 'react';

export function createServicesScroll(pageElement: RefObject<HTMLElement>) {
  let yOffset;

  if (window.innerWidth < 575.98) {
    yOffset = 600;
  } else if (window.innerWidth < 767.98) {
    yOffset = 830;
  } else if (window.innerWidth < 991.98) {
    yOffset = 420;
  } else if (window.innerWidth < 1199.98) {
    yOffset = 580;
  } else {
    yOffset = 700;
  }

  const element = pageElement.current;
  if (element !== null) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
