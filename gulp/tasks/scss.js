import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; //стиснення CSS 
import webpcss from 'gulp-webpcss'; //вивід WEBP зображень (додатково потрібно webp-converter@2.2.3)
import autoprefixer from 'gulp-autoprefixer'; //додавання вендорних префіксів
import groupCssMediaQueries from 'gulp-group-css-media-queries'; //групування медія запитів

const sass = gulpSass(dartSass);

export function scss (){
	return app.gulp.src(app.path.src.scss, {sourcemap: true})
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'SCSS',
			message: 'Error: <%= error.message %>'
		})
	))
	/* .pipe(app.plugins.replace(/@img\//g, '../img/')) //пошук і заміна @img на img */
	.pipe(sass({
		outputStyle: 'expanded',
	}))
	.pipe(app.plugins.replace(/@img\//g, '../img/')) //пошук і заміна @img на img
	.pipe(groupCssMediaQueries())
	.pipe(webpcss(
		{
			webpClass: '.webp', //якщо браузер підтримує то додається клас .webp
			noWebpClass: '.no-webp' //якщо браузер не підтримує то додається клас .no-webp
		}
	))
	.pipe(autoprefixer(
		{
			grid: true,
			overrideBrowserList: ['last 5 version'],
			cascade: true
		}
	))
	//Якщо потрібний не стиснений файл стилів
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(cleanCss({
		format: 'beautify' //повністю розвернутий код (не мінімізований)
	}))
	.pipe(rename({
		extname: '.min.css'
	}))
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(app.plugins.browsersync.stream());
}