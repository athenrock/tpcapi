'use strict';
const host = require("../config/api_config");
const fetch = require('node-fetch');

module.exports=(param)=>{
    const url = `${host.moApi3.apiUrl}/ListingCatalog/productDetailNew?userId=${param.userId}&productId=${param.spuNo}&isClear=1`;
    console.log("get moApi3:" +url);
     return fetch(url,{
          method:'Get'
      }).then(function(response) {
          return response.json()
      }).then(function(json) {
          const spuInfo = require('../models/productInfo');
          return spuInfo(json);
      }).catch(function(ex) {
          console.log('parsing failed', ex);
          return ex;
      });
};