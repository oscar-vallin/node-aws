const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send(`<button>laurita</button>`)
});

app.listen(8080, () => {
    console.log('server up!');
});