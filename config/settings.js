#!/usr/bin/env node
'use strict';

const Path = require('path');

const internals = {};

let option={
    host: 'localhost',
    port:3333,
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }
};

let port = normalizePort(process.env.PORT || '3333');

option.port = port;


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

let settings = {};
settings.option = option;
module.exports= settings;