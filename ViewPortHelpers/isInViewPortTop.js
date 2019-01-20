module.exports = () => {
  this.test = topOffset => {

    /*
    Custom helper that returns the position of marker in relation to the viewport's top offset.
    * */

    if (topOffset) {
      return topOffset.getBoundingClientRect().top + window.pageXOffset ||
        document.documentElement.scrollTop || document.body.scrollTop
    }
  }
};