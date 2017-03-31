var config = {
    entry: "./src/app",
    output: {
        path: './dist',
        filename: "my-app.js"
    },
    module:{
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader']
            }
        ]
    }
}

module.exports = config;