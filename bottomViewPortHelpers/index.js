export function isInViewPortBottomAddClass(bottomOffset, scrollOriginMarker, className) {
  /*
  Custom Helper that accepts 3 arguments to check the position of the marker. The helper adds or removes a custom
   class to place your targeted element to the bottom of the page.

   **** Arguments* ***
   bottomOffset: parent class that return a list of classes available to add to or remove from
   scrollOriginMarker: marker to calculate position in View
   className:  custom class to be added of type string
* */
  if (bottomOffset && scrollOriginMarker) {
    let height = document.documentElement.clientHeight|| window.innerHeight;
    if ((bottomOffset.getBoundingClientRect().bottom + window.pageXOffset ||
      document.documentElement.scrollTop || document.body.scrollTop) > height) {
     return scrollOriginMarker.classList.add(className);
    } else {
     return scrollOriginMarker.classList.remove(className);
    }
  }
}

export function bottomMarkerPosition(bottomOffset) {

  /*
  Custom helper that returns the position of marker in relation to the viewport's bottom offset.
  * */

  if (bottomOffset) {
    return bottomOffset.getBoundingClientRect().bottom + window.pageXOffset ||
    document.documentElement.scrollTop || document.body.scrollTop
  }
}