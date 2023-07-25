const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const jsonImporter = require('node-sass-json-importer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const loader = require('sass-loader');

// Entry points goes here
const entries = {
    globalstyle: [
        './src/scss/core.scss',
        './src/js/global.js',
    ],
};

const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css'
    })
];

if (process.env.NODE_ENV === 'development') {
    var mode = 'development';
    var devtool = 'source-map';
    var minimize = false;
    var hints = 'warning';
}

if (process.env.NODE_ENV === 'production') {
    var mode = 'production';
    var devtool = false;
    var minimize = true;
    var hints = false;
}

module.exports = {
    mode: mode,
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    optimization: {
        minimize: minimize
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // Options
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: require('sass'),
                            sassOptions: {
                                sourceMap: true,
                                precision: 8,
                                importer: jsonImporter(),
                                outputStyle: 'expanded',
                                includePaths: [path.resolve(__dirname, './src/scss/')]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf)$/i,
                type: 'asset'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },

    plugins: plugins,

    devtool: devtool,

    performance: {
        hints: hints
    }
};
