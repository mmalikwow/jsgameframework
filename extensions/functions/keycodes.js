const __keycodes = {};
document.addEventListener("keydown", k => {
	__keycodes[k.code] = true;
});

document.addEventListener("keyup", k => {
	__keycodes[k.code] = false;
});

function keycode(code) {
	return __keycodes(code);
}
