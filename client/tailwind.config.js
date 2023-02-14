module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'purpleGradient': "h- 14 bg- gradient - to - r from- purple - 500 to- pink - 500",
        'plant': "url(https://images.unsplash.com/photo-1675019674011-9141ec0df347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80)"
        // 'giphy': "url(https://giphy.com/embed/l4KihuqeuJEi9qLSM" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animated-abstract-background-l4KihuqeuJEi9qLSM">via GIPHY</a></p>)"
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0px 0px 1px rgba(1, 1, 1, .85)',
          '40px 30px 10px rgba(0, 0, 0, .5)'
        ]
      },
    },
  },
  plugins: [],
}