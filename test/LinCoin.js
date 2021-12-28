const { assert } = require("console");

var LinCoin = artifacts.require("./LinCoin.sol");

contract('LinCoin', function(accounts){
    var tokenInstance;

    it('initializes the contract with correct values', function(){
        return LinCoin.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.name();
        }).then(function(name){
            assert.equal(name, 'LinCoin', 'has the correct name')
        })
    })

    it('sets the total supply upon deployment', function(){
        return LinCoin.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply) {
            assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
            return tokenInstance.balanceOf(accounts[0]);
          }).then(function(adminBalance) {
            assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin account');
        });
    });
});