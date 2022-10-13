var http = require('http');
var fetch = require('node-fetch');

http.createServer(function (req, res) {
    const messages = [
        "👶 ⛔ 💊",
        "Pilula timeeee ❤️",
        "👶 ⛔ 💊",
        "Pilula timeeee ❤️",
        "Babycitita lembre da pilulitaaa te amo para sempre sempre",
        "PiLULA 13 Presidente!",
        "N'oubliez pas de prendre la pilule mon cher",        
    ];
    fetch(process.env.BOT_CODE+messages[new Date().getDay()]); 
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
