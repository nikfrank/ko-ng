'use strict';

let utils = require('ko-gen');

module.exports = {
  name:'route',
  files:[
    'NAME.controller.js.tpl',
    'NAME.controller.spec.js.tpl',
    'NAME.js.tpl',
    'NAME.html.tpl',
    'NAME.scss.tpl'
  ],
  vars:[
    'PLACE',
    'STATE',
    'URL',
    'NAME',
    'PATH'
  ],
  varDefaults:[
    (args, cons)=>{
      let ret = args[1] || 'app/routes/main';
      let Dpath = cons.route.defaultPath.split('/');
      return utils.lazyPrefix(ret, Dpath);
    },
    (args)=>(args[1].slice(1+args[1].lastIndexOf('/'))),
    (args)=>('/'+args[2]),
    (args)=>(args[2]),
    (args, cons)=>{
      if(args[1].indexOf(cons.route.servedFrom) === 0)
        return args[1].slice(cons.route.servedFrom.length);
      else return args[1];
    }
  ]
}

