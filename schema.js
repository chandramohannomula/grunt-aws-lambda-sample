
 
var jjv = require("jjv"); 
 // create new JJV environment 
var env = jjv();

 /** saveProfile service request object schema */
 var registationSchema={
    type: 'object',
       properties: {
        name: {
          type: "string"
        },
        password: {
          
          type: "string"
        },
        phoneNumber: {
          
          type: "string"
        },
        dob: {
         
          type: "string"
        },
        "countryCode":{
          type: "string"
        }
      },
      required: [
                    "password",
                    "phoneNumber",
                    "countryCode"
                    
       ]  //requied paramiters in request 
   
    
}

env.addSchema('registationSchema', registationSchema);

module.exports=env;
