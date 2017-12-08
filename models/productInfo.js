'use strict';
const promise = require('bluebird');

module.exports = param =>{

    return promise.resolve().then(()=>{
        if(param.code !== '0'){
            throw error ;
        }
        const content = param.content;
        return content.basic;
    }).then(basic=>{
        return {
            productId: basic.productId,
            productName:basic.productName,
            allPics : basic.allPics
        };
    }).then(data=>{
        return {code:0, msg:'', content:data };
    }).catch(err=>{
        return param;
    });

};