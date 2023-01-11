import { ethers } from "hardhat";

async function main() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Demo = await ethers.getContractFactory("Demo");
    const demo = await Demo.connect(owner).deploy();

    const eth_amount = ethers.utils.parseEther('0.3');
    const MAX_GAS = ethers.utils.parseUnits("13.0", "gwei");

    const provider = ethers.provider;
    provider.on('block', async (blockNumber) => {
        const current_block = await provider.getBlock(blockNumber);
        const block_time = current_block.timestamp;
        console.log("block time", block_time);
        const feeData = await provider.getFeeData();
        console.log(`block ${blockNumber} next gas price: ${feeData.gasPrice?.toString()}`);
        if(feeData.gasPrice?.gt(MAX_GAS)){
            console.log("[w] current gas is too expensive, waiting...");
            return;
        }
        // other conditions
        if(true){
            try {
                console.log("going");
                const tx = await demo.connect(owner).write_func(eth_amount);// , {value: eth_amount});
                const tx_r = await tx.wait();
                console.log("tx hash", tx_r.transactionHash);
                process.exit(0);
            } catch (error) {
                console.log(blockNumber, error);
            }
        }
        else{
            console.log("not time, waiting next block");
            return;
        }
    })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
