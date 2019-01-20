const custom = require('./ViewPortHelpers/viewPortHelpers');

module.exports.StickyTop = topOffset => custom.isInViewPortTop(topOffset);
module.exports.StickyBottom = bottomOffset => custom.isInViewPortBottom(bottomOffset);
module.exports.StickyTopAddClass = (topOffset, scrollOriginMarker, className) => custom.isInViewPortTopAddClass(topOffset, scrollOriginMarker, className);
module.exports.StickyBottomAddClass = (bottomOffset, scrollOriginMarker, className) => custom.isInViewPortBottomAddClass(bottomOffset, scrollOriginMarker, className);

/*module.export.topMarkerPosition = topMarkerPosition;

// module.exports.bottomMarkerPosition = bottomMarkerPosition;
//
// module.exports.isInViewPortTopAddClass = isInViewPortTopAddClass;
//
// module.exports.isInViewPortBottomAddClass = isInViewPortBottomAddClass;

// exports.testTop = topOffset => isInViewPortTop(topOffset);
// exports.TestBottom = topOffset => isInViewPortTopBottom;

// if (typeof string !== "string") throw new TypeError("Tiny wants a string!");*/

