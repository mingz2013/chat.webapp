`mkdir react.es2015.demo && cd react.es2015.demo`
`npm init`
`mkdir -p app/components`
`touch app/components/hello.jsx app/app.jsx index.html webpack.config.js`

// hello.jsx

    import React, { Component } from 'react';
    
    export default class Hello extends Component {
        render() {
            return <h1>Hello { this.props.name }</h1>;
        }
    }

// app.jsx

    import React from 'react';
    import { render } from 'react-dom';
    import Hello from './components/hello.jsx';
    
    function main() {
        render(
            <Hello name="mingz"/>,
            document.getElementById('app')
        );
    }
    
    main();

// index.html

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8"/>
    </head>
    <body>
    <div id="app"></div>
    <script src="dist/bundle.js"></script>
    </body>
    </html>

// package.json

    "main": "webpack.config.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "npm i && webpack --progress --profile --colors --display-error-details --display-cached",
        "start": "npm i && webpack && node ./node_modules/http-server/bin/http-server . -p 8080 -o",
        "watch": "webpack -d --watch"
      },
      
// webpack.config.js

    var path = require('path');
    var webpack = require('webpack');
    var ROOT_PATH = path.resolve(__dirname);
    
    module.exports = {
    
        entry: [path.resolve(ROOT_PATH, 'app/app.jsx')],
    
        output: {
            path: path.resolve(ROOT_PATH, 'dist'),
            filename: 'bundle.js'
        },
    
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
    
        module: {
            loaders: [
                {
                    test: /\.js|jsx$/,
                    exclude: /node_modules/,
                    loader: "babel",
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
	                test: /\.css$/,
	                loader: 'style-loader!css-loader'
	            },
	            {
	                test: /\.(png|jpg)$/,
	                loader: 'url-loader?limit=8192'
	            },
	            {
	                test: /\.scss$/,
	                loader: "style!css!sass"
	            }
            ]
        }
    };

`npm i react react-dom --save`
`npm i babel-core babel-loader babel-preset-es2015 babel-preset-react style-loader css-loader url-loader file-loader http-server webpack --save-dev`
`npm run build`
`npm run start`
`npm run watch`





