const express = require('express')
const app = express();

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})

const defaultController = (req, res, next) => {
  console.log(req.query)
  const { name, favoriteColor } = req.query
  res.send(`hello ${name}, your favorite color is ${favoriteColor}!`)
}

const homePage = (req, res, next) => {
  console.log(req)
  res.send('<h1>Home</h1> <p>This is my first server!</p>')
}

const serveHello = (req, res, next) => {
  res.send('Hello, this is API');
}

const serveData = (req, res, next) => {
  const data = [{ name: 'america' }, { name: 'ryan' }, { name: 'cindy' }, { name: 'kevin' }];
  res.send(data);
}


app.get('/', defaultController)
app.get('/home', homePage)
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);




