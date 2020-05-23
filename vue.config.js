const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  css: {
    requireModuleExtension: false
  },
  chainWebpack: config => {
    config.module.rules.delete("svg");
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/svg/')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  configureWebpack: {
    externals: {
      vue: 'window.Vue',
      vuex: 'window.Vuex',
      'vue-router': 'window.VueRouter',
      // 'element-ui': 'window.Element',
      'echarts': 'window.echarts',
    },
  },
  devServer: {
    hot: false,
    port: 9001,
    inline: false,
    // https: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: process.env.VUE_PROXY_URL
      }
    }
  },
  pages: {
    index: {
      // 入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 再index.html的输出
      filename: 'index.html',
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '俺的后台管理系统',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('./src/assets/less/main.less')
      ]
    }
  }
};
