const express = require('express');
const app = express();
const port = process.env.port || 3000

app.get('/', (req, res) => {
    return res.json({messsage: 'I am node.js in container'});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})