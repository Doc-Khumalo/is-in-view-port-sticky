import custom from './ViewPortHelpers/isInViewPortTop';

module.exports = function StickyTop(topOffset) { return custom.test(topOffset)};

/*module.export.topMarkerPosition = topMarkerPosition;

// module.exports.bottomMarkerPosition = bottomMarkerPosition;
//
// module.exports.isInViewPortTopAddClass = isInViewPortTopAddClass;
//
// module.exports.isInViewPortBottomAddClass = isInViewPortBottomAddClass;

// exports.testTop = topOffset => isInViewPortTop(topOffset);
// exports.TestBottom = topOffset => isInViewPortTopBottom;

// if (typeof string !== "string") throw new TypeError("Tiny wants a string!");*/

