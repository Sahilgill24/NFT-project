require("dotenv").config();

const lighthouse = require('@lighthouse-web3/sdk');

const deploy = async() =>{
  const path = "./abc.png"; //Give path to the file 
  const apiKey = process.env.API_KEY //generate from https://files.lighthouse.storage/ or cli (lighthouse-web3 api-key --new)

  const response = await lighthouse.upload(path, apiKey);
  
  // Display response
  console.log(response);
  console.log("Visit at: https://ipfs.io/ipfs/" + response.data.Hash);
}



deploy()