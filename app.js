const express = require('express');
const port = 25565;

const app = express();
const chat = [];

app.use(express.json());

app.get('/getChat', (req, res) => {
    res.json({message: 'Hi'});
    
});

app.post('/sendMessage', (req, res) => {
    const data = req.body;
    data.stamp = Date.now();
    chat.push(date);
    res.json({ response: true });

});

app.listen(port, () => {
    console.log(`Listening port ${port}`)
});