const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.set('port', 3000);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
});

/*
const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect('mongodb+srv://isterdeniz01:Deniz01042003@cluster0.8apwj.mongodb.net/', (err, client) => {
    db = client.db('Webstore');
});
*/

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'Index.html'));
});


app.get('/lessons', (req, res) => {
    const lessons = [
        { id: 1, subject: 'Maths', location: 'London', price: 100, spaces: 5, image: 'Images/maths.jpg' },
        { id: 2, subject: 'Maths', location: 'Oxford', price: 100, spaces: 5, image: 'Images/maths.jpg' },
        { id: 3, subject: 'English', location: 'London', price: 100, spaces: 5, image: 'Images/english.jpg' },
        { id: 4, subject: 'English', location: 'York', price: 80, spaces: 5, image: 'Images/english.jpg' },
        { id: 5, subject: 'Music', location: 'Bristol', price: 90, spaces: 10, image: 'Images/music.jpg' },
        { id: 6, subject: 'PE', location: 'London', price: 50, spaces: 15, image: 'Images/PE.jpg' },
        { id: 7, subject: 'PE', location: 'Manchester', price: 70, spaces: 15, image: 'Images/PE.jpg' },
        { id: 8, subject: 'Science', location: 'London', price: 100, spaces: 20, image: 'Images/science.png' },
        { id: 9, subject: 'IT', location: 'London', price: 90, spaces: 10, image: 'Images/IT.jpg' },
        { id: 10, subject: 'Geography', location: 'Manchester', price: 50, spaces: 10, image: 'Images/Geography.jpg' }
    ];
    res.json(lessons);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


