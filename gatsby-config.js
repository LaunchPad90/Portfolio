module.exports = {
  siteMetadata: {
    title: `Jacob Hickey Portfolio`,
    description: `A collection of my projects`,
    author: `Jacob Hickey`,
  },

    plugins: [
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `roboto`,
          ],
          display: 'swap'
        }
      },
      
    ],
    
  }