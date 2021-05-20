const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log('Private key:', privateKey);
console.log('\nPublic key:', publicKey);

//my keys
//Private key: b9734c540cc8f108fd8d65dd48d62535e83af978c5defafedb09bbee4028dcbf
//
//Public key: 04784d70be3f2adfec24486f3ab47f00d85b3901327cfff008b63eb6034c85a0d00f3c91ab2b21d1d5c6fbc48e295acbb398c3b99b87c56bca4c344c3ba65c614a