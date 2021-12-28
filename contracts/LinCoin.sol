// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract LinCoin {
    // Constructor
    // Set The Total number of tokens
    // read the total number of tokens
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply){
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
        // alocatte initail supply
    }
}