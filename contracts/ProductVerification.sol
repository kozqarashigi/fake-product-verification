// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductVerification {
    address public owner;

    struct Product {
        string name;
        bool exists;
    }

    mapping(string => Product) public products;

    constructor() {
        owner = msg.sender;
    }

    function registerProduct(string memory _productId, string memory _name) public {
        require(msg.sender == owner, "Only owner can add products");
        require(!products[_productId].exists, "Product already registered");

        products[_productId] = Product(_name, true);
    }

    function isProductGenuine(string memory _productId) public view returns (bool) {
        return products[_productId].exists;
    }

    function getProductName(string memory _productId) public view returns (string memory) {
        require(products[_productId].exists, "Product not found");
        return products[_productId].name;
    }
}
