const scrollToTop = (offset = 0) => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(offset, c - c / 8);
    }
};

export default scrollToTop;