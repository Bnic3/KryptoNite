var BNB = artifacts.require("BNB");
var SafeMath = artifacts.require("SafeMath");

var ERC20Basic = artifacts.require("ERC20Basic");
var BasicToken = artifacts.require("BasicToken");
var ERC20 = artifacts.require("ERC20");
var StandardToken = artifacts.require("StandardToken");
var Ownable = artifacts.require("Ownable");
var Pausable = artifacts.require("Pausable");
var PausableToken = artifacts.require("PausableToken");
var TokenTimelock = artifacts.require("TokenTimelock");
var OMGToken = artifacts.require("OMGToken");

var TronToken = artifacts.require("TronToken");



module.exports = function(deployer) {
  deployer.deploy(BNB);
  deployer.deploy(SafeMath);
  deployer.deploy(ERC20Basic);
  deployer.deploy(BasicToken);
  deployer.deploy(ERC20);
  deployer.deploy(StandardToken);
  deployer.deploy(Ownable);
  deployer.deploy(Pausable);
  deployer.deploy(PausableToken);
  deployer.deploy(TokenTimelock);
  deployer.deploy(OMGToken);
  deployer.deploy(TronToken);

};