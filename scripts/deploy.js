const hre = require("hardhat");

async function main(){
    const candidates = ["Pema","Sukitha","Nikhita","Manasa"]
    const Vot1 = await hre.ethers.getContractFactory("voting");
    const vot2 = await Vot1.deploy(candidates);

    await vot2.deployed();
    console.log("VotingSystem deployed to:",vot2.address);
}
main().catch((error)=>{
    console.error(error);
    process,exitCode=1;
})

