exports.getPost = (req, res) => {
	res.json({
		posts: [
			{title: "Fisrt post"},
			{title: "Second post"}
		]		
	});
};