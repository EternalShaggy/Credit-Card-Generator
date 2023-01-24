const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // check if the username and password match with the data in the database
    // you can use any database you prefer, like MongoDB, MySQL, etc
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).send('Invalid username or password');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).send('Invalid username or password');
    }
    // if the credentials are valid, redirect to "cardgenerator.html"
    res.redirect('/cardgenerator.html');
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
  });
  

  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });