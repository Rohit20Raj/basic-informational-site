import http from 'node:http';
import fs from 'node:fs';

const indexFile = fs.readFileSync('index.html');
const aboutFile = fs.readFileSync('about.html');
const contactMeFile = fs.readFileSync('contact-me.html');
const notFoundFile = fs.readFileSync('404.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url === '/' || req.url === '/index') {
        res.end(indexFile);
    } else if (req.url === '/about') {
        res.end(aboutFile);
    } else if (req.url === '/contact-me') {
        res.end(contactMeFile);
    } else {
        res.end(notFoundFile);
    }
});

server.listen(8080);