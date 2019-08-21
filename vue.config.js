
module.exports = {
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://192.168.0.104:3000',
        ws: true,
        changeOrigin: true
      },
    }
  }
}




