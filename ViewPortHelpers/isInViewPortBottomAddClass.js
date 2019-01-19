export function isInViewPortTopAddClass(topOffset, scrollOriginMarker, className) {
  /*
  Custom Helper that accepts 3 arguments to check the position of the marker. The helper adds or removes a custom
   class to place your targeted element to the top of the page

   **** Arguments* ***
   topOffset: parent class that return a list of classes available to add to or remove from
   scrollOriginMarker: marker to calculate position in View
   className:  custom class to be added of type string
* */

  if (topOffset && scrollOriginMarker) {
    if ((topOffset.getBoundingClientRect().top + window.pageXOffset ||
      document.documentElement.scrollTop || document.body.scrollTop) < 0) {
      return scrollOriginMarker.classList.add(className);
    } else {
      return scrollOriginMarker.classList.remove(className);
    }
  }
}