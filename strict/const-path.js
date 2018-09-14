'use strict';

var path = require('path'); // if you use const, the variable wont be overwritten

var DATA_DIR = '/data/';

function fileLocation(file) {
   path = ''.concat(DATA_DIR, file);
   return path;
}

function moveFile(file, directory) {
   var filename = path.basename(file);
   var newLocation = path.resolve(directory, filename);
   // ....
}

var file = 'trolllologo.mp3';
var location = fileLocation(file);
moveFile(file, '/tunes');

/*

open-path.js:13
   var filename = path.basename(file);
                       ^

TypeError: path.basename is not a function
    at moveFile
*/