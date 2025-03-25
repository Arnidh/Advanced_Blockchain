//SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;
import "hardhat/console.sol";

contract voting{

    address admin;
    struct Candidate
    {
        string name;
        uint256 vote;
    }

    mapping(address => bool) hasVoted;
    Candidate[] public candidates;

    event VoteCasted(address voter, string candidate);

    constructor(string[] memory _candidateNames)
    {
        admin = msg.sender;
        for (uint i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({
                name: _candidateNames[i],
                vote: 0
            }));
        }
    }

    function vote(uint256 _candidateIndex)public{
        require(!hasVoted[msg.sender], "You have already voted");
        candidates[_candidateIndex].vote++;
        hasVoted[msg.sender] = true;
        console.log("Vote casted successfully");
        emit VoteCasted(msg.sender, candidates[_candidateIndex].name);
    }

    function getwinner() public view returns (string memory) {
        uint maxVotes = 0;
        string memory winningCandidate = "";
    
        for (uint i = 0; i < candidates.length; i++) {
            if (candidates[i].vote > maxVotes) {
                maxVotes = candidates[i].vote;
                winningCandidate = candidates[i].name;
            }
        }
        return winningCandidate;
}
}