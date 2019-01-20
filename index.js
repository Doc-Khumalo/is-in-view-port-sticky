const custom = require('./ViewPortHelpers/viewPortHelpers');

module.exports.StickyTop = topOffset => custom.isInViewPortTop(topOffset);
module.exports.StickyBottom = bottomOffset => custom.isInViewPortBottom(bottomOffset);
module.exports.StickyTopAddClass = (topOffset, scrollOriginMarker, className) => custom.isInViewPortTopAddClass(topOffset, scrollOriginMarker, className);
module.exports.StickyBottomAddClass = (bottomOffset, scrollOriginMarker, className) => custom.isInViewPortBottomAddClass(bottomOffset, scrollOriginMarker, className);

