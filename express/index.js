var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var mysql      = require('mysql');


var ingredients = [
    {
        "id": "234kjw",
        "text": "Eggs"
    },
    {
        "id": "as82w",
        "text": "Milk"
    },
    {
        "id": "234sk1",
        "text": "Bacon"
    },
    {
        "id": "ppo3j3",
        "text": "Frog Legs"
    }
];


app.get('/ingredients', function(req, res) {
    console.log("GET From SERVER");
    res.send(ingredients);
});

function saverecord(name,phonumber)
{
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'tutorial_2022'
      }); 
      
    connection.connect(); 
    connection.query("INSERT INTO users VALUES(0,'"+name+"','"+phonumber+"')", function (error, results, fields) {
    if (error) throw error;
     
    }); 
    connection.end();
}

app.post('/ingredients', function(req, res) {
    var name_property = req.body;
    saverecord(name_property.name,name_property.phone);
   // console.log(req.body);
    
    res.status(200).send("Successfully posted profile");
});

app.listen(3000);