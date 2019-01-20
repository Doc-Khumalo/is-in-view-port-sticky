import isInViewPortTop from './ViewPortHelpers/isInViewPortTop';
import isInViewPortTopAddClass  from './ViewPortHelpers/isInViewPortTop';
import isInViewPortTopBottom from './ViewPortHelpers/isInViewPortBottom';
import isInViewPortBottomAddClass from './ViewPortHelpers/isInViewPortBottom';

let exports = module.exports = {};

exports.StickyTop = topOffset => isInViewPortTop(topOffset);

// module.export.topMarkerPosition = topMarkerPosition;

// module.exports.bottomMarkerPosition = bottomMarkerPosition;
//
// module.exports.isInViewPortTopAddClass = isInViewPortTopAddClass;
//
// module.exports.isInViewPortBottomAddClass = isInViewPortBottomAddClass;

// exports.testTop = topOffset => isInViewPortTop(topOffset);
// exports.TestBottom = topOffset => isInViewPortTopBottom;

// if (typeof string !== "string") throw new TypeError("Tiny wants a string!");

