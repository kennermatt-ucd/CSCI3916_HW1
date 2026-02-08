const express = require('express');
const app = express();

app.use(express.raw({ type: '*/*' }));

app.post('/', (req, res) => {
    const contentType = req.headers['content-type'] || 'text/plain';
    res.set('Content-Type', contentType);
    res.status(200).send(req.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Echo server listening on port ${port}`);
});

module.exports = app;
