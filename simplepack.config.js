module.exports = {
  entry: {
    index: './src/index.js'
  },
  export: 'react-picker-x',
	webpack: {
		moduleExternals: ['react', 'react-dom', 'prop-types']
	}
}