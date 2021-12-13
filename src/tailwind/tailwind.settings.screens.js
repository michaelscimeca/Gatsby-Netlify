/*
 * Tailwind Screens Settings
 */
const settings = require('./tailwind.settings')

const remToPx = (rem) => {
  return `${rem * 16}px`
}

module.exports = {
  a:300,
  xs: remToPx(settings.screensRem.xs), // 320px
  sm: remToPx(settings.screensRem.sm), // 448px
  md: remToPx(settings.screensRem.md), // 576px
  lg: remToPx(settings.screensRem.lg), // 704px
  xl: remToPx(settings.screensRem.xl), // 832px
  '2xl': remToPx(settings.screensRem['2xl']), // 960px
  '3xl': remToPx(settings.screensRem['3xl']), // 1088px
  '4xl': remToPx(settings.screensRem['4xl']), // 1216px
  '5xl': remToPx(settings.screensRem['5xl']), // 1344px
  '6xl': remToPx(settings.screensRem['6xl']), // 1440px
  '7xl': remToPx(settings.screensRem['7xl']), // 1600px
}
