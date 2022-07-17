const { path } = require("@vuepress/shared-utils");
module.exports = (options = {}) => ({
  name: "@anyfork/vuepress-plugin-code-copy",
  define() {
    const {
      selector = 'div[class*="language-"] pre',
      copyText = "Copy code",
      tip: { time = 3000, content = "copy success", title = "Tips" } = {},
      change,
      visibleTip = true,
    } = options;
    return {
      selector,
      copyText,
      time,
      content,
      title,
      change,
      visibleTip,
    };
  },

  clientRootMixin: path.resolve(__dirname, "./bin/clientRootMixin.js"),
  enhanceAppFiles: [path.resolve(__dirname, "./bin/appFile.js")],
});
