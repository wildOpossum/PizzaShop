export function server (done){
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.build.html}`
		},
		notify: false,
		port: 3000,
		online: true, //browser synс не працює без мережі (для оффлайну значення false)
	})
}