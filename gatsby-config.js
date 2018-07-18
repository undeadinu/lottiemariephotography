module.exports = {
  siteMetadata: {
    title: `Lottie Marie Photography`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display`,
          `Montserrat\:300,400`
        ]
      }
    }
  ],
}

