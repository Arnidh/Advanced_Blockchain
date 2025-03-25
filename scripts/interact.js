const hre = require("hardhat");

async function main() {
    const deployedAddress = "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44";
    const Vot = await hre.ethers.getContractFactory("voting");
    const Vot1 = await Vot.attach(deployedAddress);
    console.log("Interacting with VotingSystem at:", deployedAddress);
    
    async function vote(index) {
        const tx = await Vot1.vote(index);
        await tx.wait();
        console.log("Voted for candidate", index);
    }
    await vote(0); 
    const winner = await Vot1.getwinner();
    console.log("Winner is:", String(winner));
}

main().catch(console.error);
