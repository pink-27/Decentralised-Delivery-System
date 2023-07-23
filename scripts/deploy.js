const { ethers } = require("hardhat");
async function main() {
  const ShippingRequestCreator = await ethers.getContractFactory(
    "ShippingRequestCreator"
  );

  console.log("Deploying contract...");
  const shippingrequestcreator = await ShippingRequestCreator.deploy();
  await shippingrequestcreator.deployed()
  console.log(`Deplpoyed at ${shippingrequestcreator.address}`)
  // const myorder = await shippingrequestcreator.getRequestsSender()
  // console.log(`Current order ${myorder}`)
  // const transactionResponse = await shippingrequestcreator.createShippingRequest(["a","b","c","d","e","f"], ["g","h","i","j","k","l"])
  // await transactionResponse.wait(1)
  // const myorder = await shippingrequestcreator.getRequestsSender()
  // console.log(`Updated order ${myorder}`)


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });