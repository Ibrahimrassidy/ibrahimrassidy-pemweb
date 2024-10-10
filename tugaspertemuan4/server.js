const http = require('http')
const fs =require('fs');
const url = require('url');

const server = http.createServer((req,res) => {
    let q = url.parse(req.url, true);
    let namafile = "index.html" + q.pathname;
    fs.readFile(namafile, function(err, data){
        if(err){
    res.statusCode = 400;
    res.setHeader =('content-type', 'text/html');
    return res.end("404 halaman tidak ditemukan");
        }
    res.statusCode = 200;
    res.setHeader =('content-type', 'text/html')
    res.write(data);
    return res.end();
    });
});

server.listen(3000, () =>{
    console.log("server berhasil berjalan di port 3000");
});