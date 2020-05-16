module.exports = function (context, options) {
  return {
    name: 'tailwind-plugin',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'stylesheet',
              href: 'https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'stylesheet',
              href: 'https://rsms.me/inter/inter.css',
            },
          },
        ],
      };
    },
  };
};