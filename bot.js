const webHandler = require('./web.js');
//KEEP BOT WEBSITE RUNNING
/////////////////////////////
webHandler.run(); ////////  
/////////////////////////////
console.log('System Booted');
console.error = function(e){
  process.stderr.write(e+'\n')
}
console.warn = function(e){
  process.stderr.write(e+'\n')
}
console.log = function(e){
  process.stdout.write(e+'\n')
}

