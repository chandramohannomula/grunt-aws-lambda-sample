
/** Constents*/
var success="SUCCESS";
var failed="FAILED";
var defaultEnv='dev';

/** get table name  */
var Constents= require('./constants');
var tName=Constents.tableNames;
var db ; 




var schema= require('./schema');
var mysql = require('mysql');
var AWS = require('aws-sdk');

var client = require('http');
 
/*Data base connection*/
var createDBConnection = function(event){
console.log("db connection..");
 /**hostName, user,password,datases are need to configure in API gateway (Request intgration ) using stage variables  */
 return  mysql.createConnection({
                host: event.hostName || 'localhost',
                user: event.user || 'root',
                password: event.pwd || 'root',
                database: event.database || 'LAXMI'
            });

}



/**  save USER   */
 /*Request_body:  
  {
"name":"TestUser1",       //Type:string
"password":"123456",       //Type:string
"phoneNumber":9876543292,  //Type:number
 "dob":"2016-08-05"        //Type:date
}

      
      Http Status: 200
      Response: 
      {"userId":2,"status":"SUCCESS"}

     }*/


exports.userRegistation= function(event, context) {
   
         
             var dbParams=event.stageVariables;
             var body=event.body;

             console.log("event"+JSON.stringify(dbParams));
             console.log("event"+JSON.stringify(body));
            /*make conection to data base*/         
             db=createDBConnection(dbParams);
          

            // Perform validation against an incomplete user object (errors will be reported) 
            var errors = schema.validate('registationSchema', body);
           
             
              // validating the schema with reuest object 
            if (errors) {
                console.error('Failed with error object ' + JSON.stringify(errors));
                db.destroy();
                context.fail('Bad Request: invalid parameter');
                
            } else {
                var name=null;
                 var dob=null;
                 var phoneNumber=body.phoneNumber;
                 var countryCode=body.countryCode;
                 var password=body.password;
           
                 if(body.hasOwnProperty("name")){
                    name=body.name;
                 }
                if(body.hasOwnProperty("dob")){
                     dob=body.dob;
                 }
                                      
                var db1= db.query('call USER_REGISTATION(?,?,?,?,?)', [name,dob,phoneNumber,password,countryCode], function(err, result) {
                                console.log("DB"+JSON.stringify(db1.sql));
                                    if (err) {
                                      console.log(".......");
                                        console.error(err);
                                        db.destroy();
                                        context.fail({
                                            "status": failed,
                                            "error": err
                                        });

                                    } else {
                                      
                                       
                                        console.log("result2"+JSON.stringify(result[0][0]));
                                                                              
                                        if(result[0] && result[0][0] && (result[0][0].status==="SUCCESS"||result[0][0].status==="ALREADY_EXIST")){
                                          
                                             context.succeed(result[0][0]);
                                          //  getUserSaveShareDetails(context,userId); 
                                        }else{
                                          db.destroy();
                                          context.fail({
                                            "status": failed
                                            
                                           });
                                        }
                                            
                                       
                                    }
             
              });
            }
     

};

