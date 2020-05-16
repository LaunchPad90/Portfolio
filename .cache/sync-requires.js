const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/launchpad/Code/portfolio/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/launchpad/Code/portfolio/src/pages/index.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/launchpad/Code/portfolio/src/pages/resume.js")))
}

