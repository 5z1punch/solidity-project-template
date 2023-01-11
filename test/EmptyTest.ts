import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

describe("Demo", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Demo = await ethers.getContractFactory("Demo");
    const demo = await Demo.connect(owner).deploy();

    return { demo, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("pwn", async function () {
      const provider = ethers.provider;
      const { demo, owner, otherAccount } = await loadFixture(deployFixture);
      // [todo]
      expect(1).to.equal(1);
    });

  });
});
