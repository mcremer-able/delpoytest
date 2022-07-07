module.exports = {
  apps : [{
    script: 'app.js',
  }],
   
  // Deployment Configuration
  deploy : {
    production : {
       "user" : "azureuser",
       "host" : ["able-outgoing-dev.westeurope.cloudapp.azure.com"],
       "ref"  : "origin/master",
       "key" : "~/.ssh/crossinx_user.pem",
       "repo" : "git@github.com:mcremer-able/deploytest",
       "path" : "./",
       "post-setup" : "npm install"
    }
  }
};
