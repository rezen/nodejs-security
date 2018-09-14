'use strict';

const shell = require('child_process').exec;

module.exports.pingServer = function(req, res) {
  const address = req.body.address;

  shell(`ping ${address}  -c 1`, (err, stdout) => {
    res.text(stdout);
  });
};