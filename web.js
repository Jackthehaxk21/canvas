let methods = {
  run : function() {
    var express = require('express');
    var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, response) {
  response.status(200).send('Ok')
});

app.get("/fusioncraft/welcome*", async function (req, response) {
  const url = req.query.url
  const name = req.query.name
  const getProfile = async function(user, person) {
        const { Canvas } = require('canvas-constructor');
        const snek = require('snekfetch');
        const { resolve, join } = require('path');
        const fsn = require('fs-nextra');
        const plate = await fsn.readFile('./DISCORD-FC.png');
        const png = person.replace(/\.(gif|jpg|png|jpeg)\?size=2048/g, '.png?size=2048');
        const {body} = await snek.get(png);
        //console.log(body)
        Canvas.registerFont(resolve(join(__dirname, './Minecrafter.ttf')), 'Minecraft');
        let size = '42';
        if(user.length >= 15) size = '35';
        if(user.length >= 25) size = '30';
        return new Canvas(1024, 578)
          .setTextAlign('center')
          .addImage(plate, 0, 0, 1024, 578)
          //.restore()
          .addImage(body, 392, 348, 205, 206)
          .setTextFont(size+'pt Minecraft')
          .addText(user, 512, 320)
          .toBuffer()
  }
  const result = await getProfile(name, url);
  //console.log(result)
  response.send(result)
})
    
app.get("/fusioncraft/goodbye*", async function (req, response) {
  const url = req.query.url
  const name = req.query.name
  const getProfile = async function(user, person) {
        const { Canvas } = require('canvas-constructor');
        const snek = require('snekfetch');
        const { resolve, join } = require('path');
        const fsn = require('fs-nextra');
        const plate = await fsn.readFile('./DISCORD-FC-LEAVE.png');
        const png = person.replace(/\.(gif|jpg|png|jpeg)\?size=2048/g, '.png?size=2048');
        const {body} = await snek.get(png);
        //console.log(body)
        Canvas.registerFont(resolve(join(__dirname, './Minecrafter.ttf')), 'Minecraft');
        let size = '42';
        if(user.length >= 15) size = '35';
        if(user.length >= 25) size = '30';
        return new Canvas(1024, 578)
          .setTextAlign('center')
          .addImage(plate, 0, 0, 1024, 578)
          //.restore()
          .addImage(body, 392, 348, 205, 206)
          .setTextFont(size+'pt Minecraft')
          .addText(user, 512, 320)
          .toBuffer()
  }
  const result = await getProfile(name, url);
  //console.log(result)
  response.send(result)
});
  
/*app.get("/ADMIN/points", function (req, response) {
})
    
app.get("/ADMIN/settings", function (req, response) {
  //console.log(request)
})
    
app.get("/API/quote", async function (req, response) {
})
    
app.get("/API/joke", async function (req, response) {
})
    
app.get("/API/fortune", async function (req, response) {
})
    
app.get("/API", function (req, response) {
});*/
    
app.get('*', function(req, res){
  res.status(404).send('Hi there, this page does not exist but dont worry its not your fault !\n-Jackthehack21');
});


// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  //client.dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
  }
}

module.exports = methods;