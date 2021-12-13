export const scroll = {
  // Locomotive Scroll
  // https://github.com/locomotivemtl/locomotive-scroll#instance-options
  container: "#___gatsby",
  getDirection: true,
  options: {
    smooth: true,
    getDirectio: true,
    direction: 'vertical',
    /* multiplier: 9, */
    lerp: 0.1,
    smartphone: {
      smooth: true,
      direction: 'vertical',
      multiplier: 9
    },
    tablet: {
      smooth: true,
      direction: 'vertical',
      multiplier: 9,
    },
  }
}
