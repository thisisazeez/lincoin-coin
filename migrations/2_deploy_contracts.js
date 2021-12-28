const LinCoin = artifacts.require("LinCoin");

module.exports = function (deployer) {
  deployer.deploy(LinCoin, 100000);
};
