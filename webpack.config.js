const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/getMeetComment.ts',
    output: {
        path: path.resolve(__dirname, './public'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.js',
        ],
    },
    devtool: false
};