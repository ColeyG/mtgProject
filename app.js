const request = require("request-promise")
const express = require('express');
const app = express();
const bodyParser = require("body-parser")
app.use(express.static('js'));
app.use(bodyParser.json());

//this is a route. this points at the home page/root
app.get('/',(req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//set up a contact route
app.get('/contact',(req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

//set up a portfolio route
app.get('/portfolio',(req, res) => {
  res.sendFile(__dirname + '/portfolio.html');
});

app.get("/card", async (req, res) => {
  let cards = "";
  const body = await request("https://api.scryfall.com/cards/random")

  const data = JSON.parse(body)

  res.json({
    //if non random data: data.data
    data: data

  })
})

app.listen(3000, () => {
  console.log('app running on port 3000!');
});

// function call(){
//   var request = require('request');
//   request('https://api.scryfall.com/cards/search?q=AetherfluxReservoir', function (error, response, body) {
//   console.log('error:', error);
//   console.log('statusCode:', response && response.statusCode);
//   console.log('body:', body);
// });
// }

// call();

// const request = require("request")

// request("https://api.scryfall.com/cards/search?q=StormCrow", (err, response, body) => {
// 	const {data} = body  // This is called destructuring.  It removes a value from an object and creates it's own variable.  The nice thing is the object still exists.
// 	console.log(body)
// })

