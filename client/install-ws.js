let Service = require('node-windows').Service;

let scriptPath = require('path').join(__dirname, '../', 'server.js');
console.log(scriptPath);

let svc = new Service({
  name: 'Scrumblr node.js服务',    //服务名称
  description: 'Scrumblr Local', //描述
  script: scriptPath //nodejs项目要启动的文件路径
});
 
svc.on('install', () => {
  svc.start();
  console.log('Windows service installed.');
});
 
svc.install();