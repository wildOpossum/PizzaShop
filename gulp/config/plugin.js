import replace from 'gulp-replace';
import plumber from 'gulp-plumber'; //обробка помилок
import notify from 'gulp-notify'; //повідомлення (підказки)
import browsersync from 'browser-sync';
import newer from 'gulp-newer'; //для визначення чи змінювалося зображення
import ifPlugin from 'gulp-if';

//Експортуємо обєкт
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	ifPlugin: ifPlugin,
}