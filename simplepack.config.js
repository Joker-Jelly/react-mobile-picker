module.exports = {
  entry: {
    index: './src/index.js'
  },
	webpack: {
		moduleExternals: ['react', 'react-dom', 'prop-types']
	}
}