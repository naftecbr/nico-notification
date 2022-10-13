var http = require('http');
var fetch = require('node-fetch');

http.createServer(function (req, res) {
    const messages = [
        "Babycitita lembre da pilulitaaa te amo para sempre sempre",
        "Pilula timeeee ❤️",
        "👶 ⛔ 💊",
        "Pilula timeeee ❤️",
        "👶 ⛔ 💊",
        "PiLULA 13 Presidente!",
        "N'oubliez pas de prendre la pilule mon cher",        
    ];
    fetch(BOT_CODE+messages[new Date().getDay()]); 
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
