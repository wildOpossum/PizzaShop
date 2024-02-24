import fileinclude from 'gulp-file-include';
//переведення зображень в формат webp
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
//робота з html
//додає версію файла js/css/img (для вирішення проблем з кешуваннями)gulp-version-number
import versionNumber from 'gulp-version-number'; 
export const html = () =>{
	return app.gulp.src(app.path.src.html)
/* 	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'HTML',
			message: 'Error: <%= error.message %>'
		})
	)) */
	.pipe(fileinclude())
	.pipe(app.plugins.replace(/@img\//g, 'img/')) //пошук і заміна @img на img
	.pipe(webpHtmlNosvg())//переведення зображень в формат webp
	.pipe(versionNumber({
		'value' : '%DT%', //додаємо дату і час
		'append': {
			'key': '_v',
			'cover': 0,
			'to': [
				'css',
				'js',
			]
		},
		'output': {
			'file': 'gulp/version.json'
		} 
	})
	)
	.pipe(app.gulp.dest(app.path.build.html))
	.pipe(app.plugins.browsersync.stream());
}