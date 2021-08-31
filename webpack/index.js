Number.prototype.pad = function (size) {
	let str = String(this);
	while (str.length < (size || 2)) {
		str = `0${str}`;
	}
	return str;
};

const myModule = require("./stopwatch.js").myModule;
const css = require("./stopwatch.css");

