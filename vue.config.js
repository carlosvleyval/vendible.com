const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pwa: {
    name: 'VendibleApp',
    themeColor: '#007BFF',
    manifestOptions: {
      background_color: '#FFFFFF'
    },
    msTileColor: '#00000000',
    appleMobileWebAppStatusBarStyle: '#007BFF',
    iconPaths: {
      // faviconSVG: 'img/icons/favicon.svg',
      favicon32: 'img/icons/Icon-32.png',
      favicon16: 'img/icons/Icon-16.png',
      appleTouchIcon: 'img/icons/Icon-152.png',
      // maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/Icon-144.png'
    },
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // opcion para no cachear la app en el navegador
      // se complementa con la opcion anterior workboxPluginMode: 'GenerateSW'
      skipWaiting: true 
    }
  },
  transpileDependencies: true
})
