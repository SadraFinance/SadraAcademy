module.exports = {
  siteMetadata: {
    siteTitle: `آکادمی صدرا`,
    defaultTitle: `Sadra Academy | آکادمی صدرا`,
    siteTitleShort: `Sadra Academy`,
    siteDescription: `آکادمی صدرا | آموزش معاملات الگوریتمی`,
    siteUrl: `https://academy.sadrafinance.ir`,
    siteAuthor: `@MohammadMaso`,
    siteImage: `/banner.png`,
    siteLanguage: `fa`,
    themeColor: `#0067A5`,
    basePath: `/`,
  },
  
  plugins: [
    'gatsby-plugin-dark-mode',
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/SadraFinance/SadraAcademy`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sadra Academy`,
        short_name: `Sadra Academy`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://academy.sadrafinance.ir`,
      },
    },
    
    `gatsby-plugin-offline`,
  ],
};
