'use strict';
const host = require("../config/api_config");
const fetch = require('node-fetch');

module.exports=(param)=>{
    const url = `${host.searchApi.apiUrl}/search-searchApi/farFetch/ProductList?actionStr=A01B02&actionType=2&categoryNoLv1=A01&start=1&end=100`;
    return fetch(url,{
        method:'Get'
    }).then(function(response) {
        return response.json()
    }).then(function(json) {
        return json;
    }).catch(function(ex) {
        console.log('parsing failed', ex);
        return ex;
    });

};