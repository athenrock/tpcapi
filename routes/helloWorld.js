'use strict';
const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const readFile = Promise.promisify(fs.readFile);
let index={
    method: 'GET',
    path: '/',
    config:{
        // If an error occurs when parsing a cookie don't error, just log it.
        state:{
            failAction : 'log',
        }
    },
    handler: function (request, h) {
        return ('Hello, world!');
    }
};
let hello={
    method: ['GET', 'POST'],
    path: '/hello/{user?}',
    config:{
        // If an error occurs when parsing a cookie don't error, just log it.
        state:{
            failAction : 'log',
        }
    },
    handler: function (request, h) {
        return ('Hello ' + encodeURIComponent(request.params.user) + '!');
    }
};
let topshop={
    method: 'GET',
    path: '/topshop',
    config:{
        // If an error occurs when parsing a cookie don't error, just log it.
        state:{
            failAction : 'log',
        }
    },
    handler: function (req, reply) {
            const text = readFile(path.join(__dirname, '../static/index.html'), 'utf-8');
            return (text);
        }
};
module.exports=[index,hello,topshop];