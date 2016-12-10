var db = require('../db');

module.exports = {
	getAllFiles: getAllFiles,
	getFile: getFile,
	createFile: createFile,
	updateFile: updateFile,
	removeFile: removeFile,
};

function getAllFiles(req, res, next) {
	db
	.any('SELECT * FROM files')
	.then(function (data) {
		res
		.status(200)
		.json({
			status: 'success',
			data: data,
			message: 'Retrieved All Files'
		});
	})
	.catch(function (err) {
		return next(err);
	});
} 