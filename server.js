
'use strict';
const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const route = require('./routes');
const settings = require('./config/settings');
const plugins = require('./config/plugin_config');

/**************server config********/


let option={
    host: 'localhost',
    port:3333,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'static')
        }
    }
};



//Create a Hapi server
let server = new Hapi.Server(option);

server.register(plugins,function (err) {
    server.views({
        engines: {
            'html': {
                module: require('handlebars')
            }
        },
        relativeTo:__dirname,
        path:'static/templates'
    });
    if(err) {
        console.log(err);
        throw err;
    }
});

route.forEach(function (api) {
   server.route(api);
});




//Export the server to be required elsewhere.
module.exports = server;
