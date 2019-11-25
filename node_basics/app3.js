const express = require('express');
const app = express();

app.get('/', (req, resp) => {
	resp.send("YO this stuff is too high");
});

app.listen(3000);