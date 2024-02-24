import webpack from 'webpack-stream'; //збирання файлів js (+ webpack)

export function js (){
	return app.gulp.src(app.path.src.js, {sourcemap: true})
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'JS',
			message: 'Error: <%= error.message %>'
		})
	))
	.pipe(webpack({
		mode: app.isBuild ? 'production' : 'development', //режим розробника
		output: {
			filename: 'main.min.js',
		}
	}))
	.pipe(app.gulp.dest(app.path.build.js))
	.pipe(app.plugins.browsersync.stream());
}



