//підключаєм основні модулі
import gulp from 'gulp';


//імпорт шляхів
import {path} from './gulp/config/path.js';

//імпорт плагінів
import { plugins } from './gulp/config/plugin.js';

//глобальна змнінна для зберігання основних елементів
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins,
}

//імпорт задачі по копіюваюванню
import {copy} from './gulp/tasks/copy.js';
//очищення папки з результатами
import { reset } from './gulp/tasks/reset.js';
//копіювання html
import { html } from './gulp/tasks/html.js';
//запуск і автоматичне оновлення браузера
import {server} from './gulp/tasks/server.js';
//scss
import{scss} from './gulp/tasks/scss.js';
//js
import{js} from './gulp/tasks/js.js';
//images
import{images} from './gulp/tasks/images.js';
//fonts
import{otfToTtf, ttfToWoff, fontsStyle} from './gulp/tasks/fonts.js';
// svg sprite
import{svgSprive} from './gulp/tasks/svgSprive.js';

//Функція для спостерігачів
function watcher(){
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images)
}
// для можливості окремого запуску задачі
export { svgSprive }

//побудова сценаріїв виконання задач
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export {dev}
export {build}
//виконання сценарію по замовчуванню
gulp.task('default', dev);