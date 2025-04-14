module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {
        features: {
          'cascade-layers': false // Disable cascade layers processing
        }
      }
    }
  }