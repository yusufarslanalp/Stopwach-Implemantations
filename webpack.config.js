const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const clean = require("clean-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    "devServer": {
        "watchContentBase": true,
        "watchOptions": {
            "poll": true
        },
        "writeToDisk": true
    },
    "entry": "/webpack/index.js",
    "mode": "production",
    "module": {
        "rules": [
            {
                "test": /\.css$/u,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                "test": /\.html$/u,
                "use": ["html-loader"]
            },
			{
				// Exposes jQuery for use outside Webpack build
				test: require.resolve('jquery'),
				use: {
					loader: 'expose-loader',
					options: 'jQuery'
				}
			}
        ]
    },
    "output": {
        "filename": "main.js",
        "path": path.resolve(
            __dirname,
            "dist"
        )
    },
    "plugins": [
        new HtmlWebpackPlugin({
            "template": "./webpack/index.html"
        }),
		new clean.CleanWebpackPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		   })

    ]
};
