async function main() {
  const BEP20Token = await ethers.getContractFactory('Vonix')
  const deployed = await BEP20Token.deploy()
  console.log('Contract deployed to:', deployed.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
