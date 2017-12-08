'use strict';


const rootHandler = (request, h) => {

    return h.view('index', {
        title: 'examples/twig/templates | Hapi ' + request.server.version,
        message: 'Hello Twig!'
    });
};

let  log ={
    method:'GET',
    path:"/view",
    config:{
        auth: false,
        // If an error occurs when parsing a cookie don't error, just log it.
        state:{
            failAction : 'log',
        }
    },
    handler: rootHandler
};

module.exports=[log];