git clone --depth 1 --recurse-submodules --shallow-submodules ${git_repo} ${dir_name}

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# foundry

## pull foundry libs
git submodule update --init --recursive

## versions
version lib/forge-std  v1.3.0

if you cant run forge commands successfully, run `foundryup` to update.
