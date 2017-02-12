
 
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



var logInSchema={
    type: 'object',
       properties: {
       
        password: {
          
          type: "string"
        },
        phoneNumber: {
          
          type: "string"
        },
        countryCode:{
          type: "string"
        },
        deviceId : {
          type : "string"
        },
        appVer : {
          type : "string"
        },
        deviceType : {
          type : "string"
        }
      },
      required: [
                    "password",
                    "phoneNumber",
                    "countryCode",
                    "deviceId",
                    "appVer"
                    
       ]  //requied paramiters in request 
   
    
}
 var eventSchema={
    type: 'object',
       properties: {
        eventName: {
          type: "string"
        },
        description: {
          
          type: "string"
        },
          avatarImage: {
          type: "string"
        },
        hostMessage:{
          type: "string" 
        },
        startTime: {
          
          type: "string"
        },
         endTime: {
          
          type: "string"
        },
        createdBy: {
          
          type: "number"
        },
        longitude: {
         
          type: "string"
        },
         latitude: {
         
          type: "string"
        }
      },
      required: [
                    "eventName",
                    "startTime",
                    "endTime",
                    "createdBy",
                    "longitude",
                    "latitude"
                    
       ]  //requied paramiters in request 
   
    
}

var getEventsSchema={
    type: 'object',
       properties: {
       
        userId: {
          type: "number"
        },
        createdFlag: {
          /*type: "boolean",
            enum: [true,false] */
            type : "number"
        }
      },
      required: [
                    "userId",
                    "createdFlag"
                    
       ]  //requied paramiters in request 
   
    
}

var chatInsertSchema={
  type: 'object',
  properties : {
    eventId: {
      type: "number"
    },
    userId: {
          
          type: "number"
    },
    message: {
      type:"string"
    }
  },
  required :["eventId","userId","message"]
}

var chatListForEvent={
  type:'object',
  properties : {
    eventId:{
      type:"number"
    }
  },
  required:["eventId"]
}

var addEventInvities={
  type: "object",
  properties : {
    eventId : {
      type: "number"
    },
    phoneNumber: {
      type: "string"
    },
    countryCode:{
      type: "string"
    }
  },
  required : ["eventId","phoneNumber","countryCode"]
}

var userEventDecision = {
  type : "object",
  properties : {
    eventId : {
      type : "number"
    },
    userId : {
      type : "number"
    },
    decision : {
      type : "number"
    },
    adult : {
      type : "number"
    },
    child : {
      type : "number"
    },
    messageId : {
      type : "number"
    }
  },
  required : ["eventId","userId","decision","adult","child","messageId"]
}

var userInbox = {
  type : "object",
  properties : {
    userId : {
      type : "number"
    }
  },
  required : ["userId"]
}

var eventsperDay = {
  type : "object",
  properties : {
    userId : {
      type : "number"
    },
    inputYear : {
      type : "number"
    },
    inputMonth : {
      type : "number"
    },
    inputDay : {
      type : "number"
    }
  },
  required : ["userId","inputYear","inputMonth","inputDay"]
}

var dayLevelEventCountForMonth = {
  type : "object",
  properties : {
    userId : {
      type : "number"
    },
    inputMonth : {
      type : "number"
    },
    inputYear : {
      type : "number"
    }
  },
  required : ["userId","inputMonth","inputYear"]
}

var commentResponseToMessage = {
  type : "object",
  properties : {
    eventId : {
      type : "number"
    },
    fromUserId : {
      type : "number"
    },
    toUserId : {
      type : "number"
    },
    messageId :{
      type : "number"
    },
    comment : {
      type : "string"
    }
  },required : ["eventId","fromUserId","toUserId","messageId","comment"]
}

var updateEvent = {
  type : "object",
  properties : {
    eventName: {
          type: "string"
        },
        description: {
          
          type: "string"
        },
        hostMessage:{
           type: "string"
        },
        avatarImage: {
          type: "string"
        },
        startTime: {
          
          type: "string"
        },
         endTime: {
          
          type: "string"
        },
        longitude: {
         
          type: "string"
        },
         latitude: {
         
          type: "string"
        },
        id : {
  
          type : "number"
        }
        },
  required :["id"]
}

var membersForEvent = {
  type : "object",
  properties : {
    eventId : {
      type : "number"
    }
  },
  required : ["eventId"]
}

var totalAttendeesForEvent = {
  type : "object",
  properties : {
    eventId : {
      type : "number"
    }
  },
  required : ["eventId"]
}

var checkPhoneNoExists = {
  type : "object",
  properties : {
    phoneNumber : {
      type : "string"
    },
    countryCode : {
      type : "string"
    }

  },
  required : ["phoneNumber","countryCode"]  
}

var updateMessageStatus = {
  type : "object",
  properties : {
    actionId : {
      type : "number"
    },
    status : {
      type : "number"
    }

  },
  required : ["actionId","status"]   
}

var getEventDetails = {
  type : "object",
  properties : {
    eventId : {
      type : "number"
    },
    userId : {
      type : "number"
    }
  },
  required : ["eventId"]
}

var userProfile = {
  type : "object",
  properties : {
    userId : {
      type : "number"
    }
  },
  required : ["userId"]
}

var updateUserProfile = {
  type : "object",
  properties : {
    userId : {
      type : "number"
    },
    userNname : {
      type : "string"
    },
    registerDate : {
      type : "string"
    },
    phoneNumber : {
      type : "string"
    },
    dob : {
      type : "string"
    },
    phoneCode : {
      type : "string"
    }
  },
  required : ["userId"]
}

env.addSchema('registationSchema', registationSchema);
env.addSchema('logInSchema', logInSchema);
env.addSchema('eventSchema', eventSchema);
env.addSchema('getEventsSchema', getEventsSchema);
env.addSchema('chatInsertSchema',chatInsertSchema);
env.addSchema('chatListForEvent',chatListForEvent);
env.addSchema('addEventInvities',addEventInvities);
env.addSchema('userEventDecision',userEventDecision);
env.addSchema('userInbox',userInbox);
env.addSchema('eventsperDay',eventsperDay);
env.addSchema('dayLevelEventCountForMonth',dayLevelEventCountForMonth);
env.addSchema('commentResponseToMessage',commentResponseToMessage);
env.addSchema('updateEvent',updateEvent);
env.addSchema('membersForEvent',membersForEvent);
env.addSchema('totalAttendeesForEvent',totalAttendeesForEvent);
env.addSchema('checkPhoneNoExists',checkPhoneNoExists);
env.addSchema('updateMessageStatus',updateMessageStatus);
env.addSchema('getEventDetails',getEventDetails);
env.addSchema('userProfile',userProfile);
env.addSchema('updateUserProfile',updateUserProfile);

module.exports=env;
