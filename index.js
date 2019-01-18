import { topMarkerPosition, isInViewPortTopAddClass } from './topViewPortHelpers/index';
import { isInViewPortBottomAddClass, bottomMarkerPosition } from './bottomViewPortHelpers/index';

module.exports.topMarkerPosition =  topOffset => {
  topMarkerPosition(topOffset)
};

module.exports.bottomMarkerPosition =  bottomOffset => {
  bottomMarkerPosition(bottomOffset)
};

module.exports.isInViewPortTopAddClass =  (topOffset, scrollOriginMarker, className) => {
  isInViewPortTopAddClass(topOffset, scrollOriginMarker, className)
};

module.exports.isInViewPortBottomAddClass =  (bottomOffset, scrollOriginMarker, className) => {
  isInViewPortBottomAddClass(bottomOffset, scrollOriginMarker, className)
};
