import * as SmoothScroll from 'smooth-scroll';

/**
 * Smooth scroll and focus to element
 * @param {string} id - DOM element id
 * @param {number} speed - time in milliseconds to animate scroll
 * @param {number} offset - distance in pixels to offset scroll from selector
 */
export function scrollToElement(id: string, speed: number = 500, offset: number = 0): void {
  const scroll = new SmoothScroll();

  if (document.getElementById(id)) {
    scroll.animateScroll(
      document.getElementById(id),
      null,
      { offset, speed, easing: 'easeOutCubic' }
    );
  }
}
