midware = (req, res, next) => {
	console.log("Mid ware was here");
	next();
}

module.exports = {
	midware
}