import topMarkerPosition from './topViewPortHelpers/index';
import isInViewPortTopAddClass  from './topViewPortHelpers/index';
import bottomMarkerPosition from './bottomViewPortHelpers/index';
import isInViewPortBottomAddClass from './bottomViewPortHelpers/index';

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
