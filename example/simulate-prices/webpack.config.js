const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './stockClient.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: { reserved: ['$super'] },
                },
            }),
        ],
    },
};
