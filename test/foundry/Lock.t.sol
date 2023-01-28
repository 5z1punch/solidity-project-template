// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 <0.9.0;

import "forge-std/Test.sol";
import "contracts/Lock.sol";


contract ContractTest is Test {

    function setUp() public {
       console.log("hey!hey!");
    }

    function testExample() public {
        console.log("enter test");
        bytes memory a = abi.encodePacked(keccak256("0x1"), bytes32(0));
        bytes32 a1;
        bytes32 a2;
        assembly {
            a1 := mload(add(add(a, 32), 0))
            a2 := mload(add(add(a, 32), 32))
        }
        console.log(uint(a1), uint(a2));
        console.log(a.length);
        console.log("test end");
        assertEq(uint(1), uint(1));
        assert(bytes32("0x41")==bytes32("0x41"));
    }

}
