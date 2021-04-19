const express = require('express');
const app = express();

const name = "laurita";
app.get('/', (req,res) => {
    res.send(`<button>${name}</button>`)
});

app.listen(3000, () => {
    console.log('server up!');
});