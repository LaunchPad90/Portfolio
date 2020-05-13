module.exports = {
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
            `source sans serif\:300,400,400i,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      }
    ],
    
  }