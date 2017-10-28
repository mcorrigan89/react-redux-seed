module.exports = {
    parser: require('postcss-scss'),
    syntax: 'postcss-scss',
    plugins: {
      'postcss-import': {},
      'postcss-cssnext': {},
      'cssnano': {}
    }
  }