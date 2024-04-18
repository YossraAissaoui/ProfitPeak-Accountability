import { ethers, Contract } from 'ethers';
import Todo from './abis/Todo.json';

const getBlockchain = async () => {
  try {
    // Connect to the local Ganache blockchain
    const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545');

    // Get the default account (assuming it's unlocked)
    const signer = provider.getSigner();

    // Get the network ID (optional, depending on your requirements)
    const networkId = await provider.getNetwork().then(network => network.chainId);

    // Get the contract instance
    const todo = new Contract(
      '0xEaC5384c9aD55A7A3ce855E738A4D42e3A1Cc06B', // Put your smart contract address
      Todo.abi,
      signer
    );

    return { todo };
  } catch (error) {
    console.error('Error connecting to blockchain:', error);
    throw error;
  }
};

export default getBlockchain;