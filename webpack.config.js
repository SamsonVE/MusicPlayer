module.exports = {
        entry: './src/js/main.js',
        output: {
            path:'dist/',
            filename:'bundle.js'
        },
        module:{
            loaders:[
                {
                  test: /\.scss$/,
                  loader: 'style!css!sass'
                },
                {
                  test: /\.js$/,
                  loader:'babel',
                  exclude:/node_modules/,
                  query: {
                    presets: ['es2015']
                  }
                },
                {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=./fonts/[name].[ext]'
                }
            ]
        }
	}
