module.exports.deleteMonitor = function(req, res) {
  const id = req.params.id;
  db.remove(id)
  .then() //....
}

// ..


app.delete('/monitor/:id', monitor.deleteDoc);

// ...
const Acl = require('acl');
const monitor = require('./routes/monitor');

const acl = new Acl(new Acl.memoryBackend());

acl.allow('member', 'monitor', ['edit','view', 'delete'])

app.delete('/monitor/:id', acl.middleware(), monitor.deleteDoc);