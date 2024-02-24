import fs from 'fs'; //плагін нод працює з файловою системою
import fonter from 'gulp-fonter'; //шрифти з формата otf в ttf i woff
import ttf2woff2 from 'gulp-ttf2woff2'; 

export function otfToTtf (){
	//пошук шрифтів .otf
	return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'FONTS',
			message: 'Error: <%= error.message %>'
		})
	))
	//конвертація в .ttf
	.pipe(fonter({
		formats: ['ttf']
	}))
	//вивантажуємо в ресурсну папку
	.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export function ttfToWoff (){
	//пошук шрифтів .ttf
	return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'FONTS',
			message: 'Error: <%= error.message %>'
		})
	))
	//конвертація в .woff
	.pipe(fonter({
		formats: ['woff']
	}))
	//вивантажуємо в папку з результатом
	.pipe(app.gulp.dest(`${app.path.build.fonts}`))
	//пошук шрифтів .ttf
	.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
	//конвертація в .woff2
	.pipe(ttf2woff2())
	//вивантажуємо в папку з результатом
	.pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export function fontsStyle(){
	//файл стилів підключення шрифтів
	let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
	//перевірка чи існує файл шрифтів
fs.readdir(app.path.build.fonts, function(err, fontsFiles){
	if(fontsFiles){
		//Перевіряємо чи існує файл стилів для підключення шрифтів
		if(!fs.existsSync(fontsFile)){
			//якщо файла не існує то створими його
			fs.writeFile(fontsFile, '', cb);
			let newFileOnly;
			for(let i = 0; i < fontsFiles.length; i++){
				//запис підключених шрфитів до файлу стилів
				let fontFileName = fontsFiles[i].split('.')[0];
				if(newFileOnly !== fontFileName){
					let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
					let fontweight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
					if(fontweight.toLowerCase() === 'thin'){
						fontweight = 100;
					}else if(fontweight.toLowerCase() === 'extralight'){
						fontweight = 200;
					}else if(fontweight.toLowerCase() === 'light'){
						fontweight = 300;
					}else if(fontweight.toLowerCase() === 'medium'){
						fontweight = 500;
					}else if(fontweight.toLowerCase() === 'semibold'){
						fontweight = 600;
					}else if(fontweight.toLowerCase() === 'bold'){
						fontweight = 700;
					}else if(fontweight.toLowerCase() === 'extrabold' || fontweight.toLowerCase() ==='heavy') {
						fontweight = 800;
					}else if(fontweight.toLowerCase() === 'black'){
						fontweight = 900;
					}else{
						fontweight = 400;						
					}
					fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontweight};\n\tfont-style: normal;\n}\r\n`, cb);
                        newFileOnly = fontFileName;						
					
					newFileOnly = fontFileName;
				}
			}
		}else{
			console.log('Файл scss/font.scss вже існує. Для оновлення файла потрібно його видалити');
		}
	}	
});
return app.gulp.src(`${app.path.srcFolder}`);
function cb() { }
}