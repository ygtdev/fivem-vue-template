fx_version 'cerulean'
game 'gta5'

author 'COOL#0356'
description 'A plugin template for FiveM built using Vue and TypeScript.'
version '1.0.0'

ui_page 'web/dist/index.html'
files {
    'web/dist/*',
	'web/dist/**/*'
}

server_script 'dist/server/**/*.js'
client_script 'dist/client/**/*.js'

lua54 'yes'