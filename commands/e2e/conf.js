'use strict';

let utils = require('ko-gen');

module.exports = {
  name:'e2e',
  files:[
    'NAME.po.js.tpl',
    'NAME.spec.js.tpl'
  ],
  vars:[
    'PLACE',
    'URL',
    'NAME'
  ],
  varDefaults:[
    (args, cons)=>{
      let ret = args[1] || 'e2e/main';
      let Dpath = cons.e2e.defaultPath.split('/');
      return utils.lazyPrefix(ret, Dpath);
    },
    (args)=>('/'+args[1].slice(1+args[1].lastIndexOf('/'))),
    (args)=>(args[1].slice(1+args[1].lastIndexOf('/')))
  ]
}

