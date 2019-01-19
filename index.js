import topMarkerPositionTest from './topViewPortHelpers/index';
import isInViewPortTopAddClass  from './topViewPortHelpers/index';
import bottomMarkerPosition from './bottomViewPortHelpers/index';
import isInViewPortBottomAddClass from './bottomViewPortHelpers/index';

// module.export.topMarkerPosition = topMarkerPosition;

module.exports.bottomMarkerPosition = bottomMarkerPosition;

module.exports.isInViewPortTopAddClass = isInViewPortTopAddClass;

module.exports.isInViewPortBottomAddClass = isInViewPortBottomAddClass;

topMarkerPosition.exports = topOffset => topMarkerPositionTest(topOffset);
  // if (typeof string !== "string") throw new TypeError("Tiny wants a string!");

