const path = require('path');

var config = {
    entry: "./src/app",
    output: {
        path: path.resolve(__dirname,'dist'),
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