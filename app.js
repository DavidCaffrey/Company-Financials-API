const fs = require('fs');

var name = "David Peter Caffrey";

 fs.readdir('./',function(err,files){
    if(err)console.log("Error",err);
    else console.log("Result",files);
});

fs.writeFile("GOOG.txt",name, function(err){
    if(err)console.log(err);
    else console.log("SUCCESS");
})
