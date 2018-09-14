const spawn = require('child_process').spawn;

module.exports.pingServer = function(req, res) {
  const address = req.body.address;
  // @todo validate is address

  const proc = spawn('ping', [address, '-c', '1']);
  let output = '';
  let err = '';

  proc.stdout.on('data', (data) => output += data);
  proc.stderr.on('data', (data) => err += data);

  proc.on('close', (code) => {
    res.text(output);
  });
};