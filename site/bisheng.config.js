const path = require('path');
const fs = require('fs');
const replaceLib = require('antd-tools/lib/replaceLib');
const isDev = process.env.NODE_ENV === 'development';

function alertBabelConfig(rules) {
  rules.forEach(rule => {
    if (rule.loader && rule.loader === 'babel-loader') {
      if (rule.options.plugins.indexOf(replaceLib) === -1) {
        rule.options.plugins.push(replaceLib);
      }
      rule.options.plugins = rule.options.plugins.filter(
        plugin => !plugin.indexOf || plugin.indexOf('babel-plugin-add-module-exports') === -1
      );
    } else if (rule.use) {
      alertBabelConfig(rule.use);
    }
  });
}

module.exports = {
  port: 8001,
  root: '/',
  source: {
    docs: './docs',
    css: './css',
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  themeConfig: {
    root: '/',
    isDev,
    typeOrder: {
      基础:0,
      jui相关: 1,
      其他: 2
    },
  },
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  webpackConfig(config) {
    alertBabelConfig(config.module.rules);

    if (isDev) {
      config.devtool = 'source-map';
    }

    config.externals = {
      react: 'React',
      'react-dom': 'ReactDOM',
      moment: 'moment',
      antd: 'antd',
    };

    return config;
  },
  htmlTemplateExtraData: {
    isDev,
  },
};
