var http = require('http');
http.createServer(function (req, res) {
    fetch("https://api.telegram.org/bot5424423676:AAF40gthymMhZyta1JMSGK52n91kwY6_lA4/sendMessage?chat_id=-714399706&parse_mode=Markdown&text=Test"); 
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
