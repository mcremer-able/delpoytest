
module.exports = {
  apps: [{
    script: 'app.js',
  }],

  // Deployment Configuration
  deploy: {
    production: {
      "user": "azureuser",
      "host": ["able-outgoing-dev.westeurope.cloudapp.azure.com"],
      "ref": "origin/main",
      "key": "~/.ssh/crossinx_user.pem",
      "repo": "https://github.com/mcremer-able/delpoytest.git",
      "path": "/home/azureuser/www/deploytest",
      "post-deploy": `source ~/.bashrc && \ 
      npm install && `
    }
  }
};
