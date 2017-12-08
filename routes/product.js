'use strict';

const productInfo = require('../controllers/productInfo');
const productList = require("../controllers/productList");

let productInfoRoute={
    method:'GET',
    path: '/product/{spuNo?}',
    config:{
        // If an error occurs when parsing a cookie don't error, just log it.
        state:{
            failAction : 'log',
        }
    },
    handler:function (request,h) {
        // 用productDetail中的实现来赋值 D145290A1EE5FD6951F12E36F726B497
        return productInfo({spuNo:request.params.spuNo,userId:'D145290A1EE5FD6951F12E36F726B497'});
    }
};

let productListRoute ={
    method:'GET',
    path: '/productList/{category?}',
    config:{
        // If an error occurs when parsing a cookie don't error, just log it.
        state:{
            failAction : 'log',
        }
    },
    handler:function (request,h) {
        // 用productCtl中的实现来赋值 D145290A1EE5FD6951F12E36F726B497
        return productList({category:request.params.category});
    }

};


module.exports=[productInfoRoute,productListRoute];
