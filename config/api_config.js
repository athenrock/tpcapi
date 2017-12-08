'use strict';

let envs={};

const moApi3 = {
    //port: 8088,
    apiUrl: 'http://192.168.20.155:8080'
};
const searchApi={
    apiUrl: 'http://192.168.20.238:8080'
};


envs.moApi3 = moApi3;
envs.searchApi = searchApi;
module.exports=envs;
