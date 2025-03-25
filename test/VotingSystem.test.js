const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting Contract", function () {
  let Voting;
  let voting;
  let candidates;

  beforeEach(async function () {
    candidates = ["C1", "C2", "C3", "C4"];
    Voting = await ethers.getContractFactory("voting");
    voting = await Voting.deploy(candidates);
    await voting.deployed();
  });

  it("Should correctly identify the winner", async function () {
    await voting.vote(0);
    const winner = await voting.getwinner();
    expect(String(winner)).to.equal("Pema");
  });
});
