const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const path = require("path");
const devMode = process.env.NODE_ENV !== "production";

const config = {
	entry: {
		"js/main": [
			path.resolve(__dirname, "./src/js/index.js"),
			path.resolve(__dirname, "./src/js/animation.js"),
		],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /.s?css$/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(svg|png|jpg)$/i,
				type: "asset",
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			template: "src/pages/index.html",
			filename: "index.html",
			inject: "body",
		}),

		new HtmlWebpackPlugin({
			template: "src/pages/contact.html",
			filename: "contact.html",
			inject: "body",
		}),

		new HtmlWebpackPlugin({
			template: "src/pages/projects.html",
			filename: "projects.html",
			inject: "body",
		}),

		new HtmlWebpackPlugin({
			template: "src/pages/projects/workspace-of-tomorrow.html",
			filename: "projects/workspace-of-tomorrow.html",
			inject: "body",
		}),

		new HtmlWebpackPlugin({
			template: "src/pages/projects/photo-portfolio.html",
			filename: "projects/photo-portfolio.html",
			inject: "body",
		}),

		new HtmlWebpackPlugin({
			template: "src/pages/projects/front-end-portfolio.html",
			filename: "projects/front-end-portfolio.html",
			inject: "body",
		}),

		new HtmlWebpackPlugin({
			template: "src/pages/projects/weather-app.html",
			filename: "projects/weather-app.html",
			inject: "body",
		}),

		new HtmlWebpackPlugin({
			template: "src/pages/projects/bookworm.html",
			filename: "projects/bookworm.html",
			inject: "body",
		}),

		new HtmlWebpackPlugin({
			template: "src/pages/thankyoupage.html",
			filename: "thankyoupage.html",
			inject: "body",
		}),

		new CopyPlugin({
			patterns: [
				{
					from: "src/images",
					to: "images",
				},
				{
					from: "src/pages/mail.php",
					to: "./",
				},
				{
					from: "src/.htaccess",
					to: "./",
				},
			],
		}),
		new FaviconsWebpackPlugin({
			logo: "./src/images/favicon.svg",
			prefix: "images/favicon/",
			inject: true,
			icons: {
				android: true,
				appleIcon: true,
				favicons: true,
				windows: true,
			},
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[hash:8].css",
		}),
	],
	stats: {
		children: true,
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							["jpegtran", { progressive: true }],
							["optipng", { optimizationLevel: 5 }],
						],
					},
				},
			}),
			new HtmlMinimizerPlugin(),
		],
	},
	devServer: {
		open: true,
		host: "localhost",
		port: 3000,
	},
};

module.exports = () => {
	if (devMode) {
		config.mode = "development";
	} else {
		config.mode = "production";
	}
	return config;
};
