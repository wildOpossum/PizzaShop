//файл для копіювання з ресурсної папкти в фінішну
export function copy (){
	return app.gulp.src(app.path.src.files)
	.pipe(app.gulp.dest(app.path.build.files));
}