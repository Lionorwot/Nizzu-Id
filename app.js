{
  "name": "Nizzu ID WHa-Bot",
  "description": "Javascript WhatsApp bot made by Nizzu ID",
  "logo": "https://i.ibb.co/CKPwj4Nh/wp12672332-itachi-uchiha-mobile-4k-wallpapers.jpg",
  "keywords": ["bot"],
  "success_url": "/",

  "env": {
    "SESSION_ID": {
      "description": "Put the session-id here.",
      "required": true
    },  

    "ALIVE_IMG": {
      "description": "Put your alive img here.",
      "required": true
    },
    
    "ALIVE_MSG": {
      "description": "Put your alive msg here.",
      "required": true
    }   
},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
