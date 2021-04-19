const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send(`<button>hello</button>`)
});

app.listen(3000, () => {
    console.log('server up!');
});