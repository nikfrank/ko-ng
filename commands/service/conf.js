'use strict';

let utils = require('ko-gen');

module.exports = {
  name:'service',
  files:[
    'NAME.service.js.tpl',
    'NAME.service.spec.js.tpl'
  ],
  vars:[
    'PLACE',
    'NAME'
  ],
  varDefaults:[
    (args, cons)=>{
      let ret = args[1] || 'services/default-service';
      let Dpath = cons.service.defaultPath.split('/');
      return utils.lazyPrefix(ret, Dpath);
    },
    (args)=>(args[1].slice(1+args[1].lastIndexOf('/')))
  ]
}
