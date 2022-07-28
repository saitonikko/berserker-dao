import Web3 from 'web3';
import { CLAIM_ADDR } from "../contracts/address"
import { CLAIM_ABI } from '../contracts/abi';

const web3 = new Web3();

export const getClaimContract = async () => {
  // if (signer)
  window.web3 = new Web3(window.ethereum);
  // else
  //   window.web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');
  const contract = await new window.web3.eth.Contract(CLAIM_ABI, CLAIM_ADDR);
  return contract;
};

export const getUserBalance = async (_account) => {
  if (!_account) return 0;
  const contract = await getClaimContract();
  const _tokens = await contract.methods.balanceOf(_account).call();
  return web3.utils.fromWei(_tokens, "ether");
}

export const getTokenBalance = async (_tokenId) => {
  if (!_tokenId) return 0;
  const contract = await getClaimContract();
  const _tokens = await contract.methods.balanceOf(_tokenId).call();
  return web3.utils.fromWei(_tokens, "ether");
}

export const getBalance = async (_account) => {
  if (!_account) return 0;
  const _balance = await window.web3.eth.getBalance(_account);
  return web3.utils.fromWei(_balance, "ether");
}