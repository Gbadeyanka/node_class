
var mongojs = require("mongojs");
var databaseUrl = "mongodb://localhost:27017/gtb"; // "username:password@example.com/mydb"
//var databaseUrl = "mongodb://mtnmomouser:momoS0hLoco@localhost:27017/mtnmomo";
var collections = ["request_log"]; 

var mongodb = {};
var db = mongojs(databaseUrl,collections);


mongodb.testdb = function(){ 
       db.request_log.find({mtn_ref: "xxxx"}, function(err, res) {
        if( err || !res) console.log("No record");
        else res.forEach( function(res_i) {
          console.log(res_i);
        } );
      });
}


mongodb.addlog = function(collecions,callback){ 
      
      db.request_log.save(collecions, function(err, saved) {
        console.log(saved);
      if( err || !saved ) callback(false,saved);
      else callback(true,saved);
    });
}


mongodb.updatelog = function(phonenumber,updated_data,callback){
  db.request_log.findAndModify({
      query: {phonenumber : phonenumber },
      update: { $set: updated_data  },
      new: true
  }, function (err, doc, lastErrorObject) {
        
      if(doc){
           callback(true,doc);
      }
      else{
       callback(false,err);
       
       }
  });
   
  
}


mongodb.deletelog = function(myquery,callback){ 
  db.request_log.remove(myquery, function(err, obj) {
    if (err) throw callback(err);
    console.log("1 document deleted"); 
  }); 
}

mongodb.getsingle = function(myquery,callback){ 
  db.request_log.find(myquery, function(err, users) {    
     callback(err, users);
  });

 
    
  
}











// Export the module
module.exports = mongodb;