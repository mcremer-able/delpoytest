module.exports = {
    apps : [{
      script: 'app.js',
    }],
     
    // Deployment Configuration
    deploy : {
      production : {
         "user" : "ubuntu",
         "host" : ["able-outgoing-dev.westeurope.cloudapp.azure.com"],
         "ref"  : "origin/master",
         "repo" : "git@github.com:Username/repository.git",
         "path" : "/var/www/my-repository",
         "post-deploy" : "npm install"
      }
    }
  };
  