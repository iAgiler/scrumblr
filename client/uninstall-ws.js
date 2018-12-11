let Service = require('node-windows').Service;

let svc = new Service({
  name: 'Scrumblr node.js服务',    //服务名称
  description: 'Scrumblr Local', //描述
  script: 'F:\\opensource\\node.js\\scrumblr-iAgiler\\server.js', //nodejs项目要启动的文件路径
  nodeOptions: [
    '--port=8041'
  ]
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
    console.log('Uninstall complete.');
    console.log('The service exists: ', svc.exists);
});

// Uninstall the service.
svc.uninstall();