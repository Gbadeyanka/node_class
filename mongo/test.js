var mongojs = require('./mongodb');
/*
var record = {"phonenumber":"777777777","name":"Yinka Abass","Age":42,"Gender":"Male"}
mongojs.addlog(record,function(){
});*/
/*
var updated_data = {"phonenumber":"0123456789","name":"Gbadeyanka Abass Adebay","Age":29,"Gender":"Male"}
mongojs.updatelog('0123456789',updated_data,function(){})

var queryString  = {"phonenumber":"0123456789"};
mongojs.deletelog(queryString,function(){})*/
var queryString  = {"phone":"1234567899"};
mongojs.getsingle(queryString,function(err,result){
    console.log(result);
})