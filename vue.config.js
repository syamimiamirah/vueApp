const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/syamimiamirah/'  // Replace 'your-repository-name' with your GitHub repository name
    : '/'
})
