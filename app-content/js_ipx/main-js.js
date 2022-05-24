var trm = "terminal"
var bdy = "body"
var ph = "index"
var mob = "mobile-view"
function conLoad() {
	console.group("css")
	console.log(`${trm}.css loaded`)
	console.log(`${bdy}.css loaded`)
	console.log(`${mob}.css loaded`)
	console.groupEnd()
	console.group("sources")
	console.warn(`${ph}.php?s=sp3a not loaded`)
	console.groupEnd()
}