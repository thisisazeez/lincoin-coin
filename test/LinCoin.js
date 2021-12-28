var LinCoin = artifacts.require("./LinCoin.sol");
// const { assert } = require("console");
// const { isTypedArray } = require("util/types");


contract('LinCoin', function(accounts){
    it('sets the total supply upon deployment', function(){
        return LinCoin.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
            assert.equal(totalSupply.toNumber(), 100000, 'sets the total supply to 1,000,000');
            
        })
    })
})