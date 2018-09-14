'use strict';

const fs          = require('fs');
const url         = require('url');
const http        = require('http');
const path        = require('path');
const querystring = require('querystring');

function editorTemplate(file, content) {
  return `<!DOCTYPE html>
    <html>
    <body>
      <style>*{font-family: sans-serif;}</style>
      <h1>Editor</h1><h4>${file}</h4>
      <textarea cols="2" rows="20" style="width:100%">${content}</textarea>
    </body>
    </html>`;
}

const root = process.cwd();

http.createServer(function (req, res) {
  const parsed  = url.parse(req.url);
  const page    = parsed.pathname.slice(1, parsed.pathname.length);
  const q       = querystring.parse(parsed.query);

  let file = page;

  if (req.url === '' || req.url === '/') {
    file = 'index.html';
  }

  if (page === 'editor.html' && q.file) {
    file = q.file;
  }

  console.log('req: ' + file);

  fs.readFile(file, function(err, content) {
    if (!err) {
      if (page === 'editor.html') {
        content = editorTemplate(file, content);
      }
      res.writeHead(200);
      res.end(content, 'utf-8');
      return;
    }
    
    if (err.code == 'ENOENT'){
      res.writeHead(404);
      res.end('Nothing there?', 'utf-8');
      return;
    }

    res.writeHead(500);
    res.end(`Sorry, check with the site admin for error: ${err.code} ..\n`);
    res.end(); 
  });

}).listen(8125);
console.log('[i] Server running on 8185');