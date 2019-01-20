export default function isInViewPortBottom(bottomOffset) {

  /*
  Custom helper that returns the position of marker in relation to the viewport's bottom offset.
  * */

  if (bottomOffset) {
    return bottomOffset.getBoundingClientRect().bottom + window.pageXOffset ||
    document.documentElement.scrollTop || document.body.scrollTop
  }
}