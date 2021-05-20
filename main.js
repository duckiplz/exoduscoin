const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('b9734c540cc8f108fd8d65dd48d62535e83af978c5defafedb09bbee4028dcbf');
const myWalletAddress = myKey.getPublic('hex');

let exodusCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'Random wallet', 10);
tx1.signTransaction(myKey);
exodusCoin.addTransaction(tx1);

console.log('\n\nStarting miner...');
exodusCoin.minePendingTransactions('jonah');

console.log('Jonahs bal:', exodusCoin.getBalanceOfAddress('jonah'));
exodusCoin.minePendingTransactions('jonah');
console.log('Jonahs bal:', exodusCoin.getBalanceOfAddress('jonah'));