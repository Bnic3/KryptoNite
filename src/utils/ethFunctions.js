const bip39 = require('bip39')
const hdkey = require('hdkey')
const ethUtil = require('ethereumjs-util')


/**
     *
     * @returns mnemonic
     */
export function generateMnemonic(){
    return  bip39.generateMnemonic()
} 
/**
     * @param (mnemonic)
     * @returns (Buffer(Seed)
     */
export function generateSeed(mnemonic){
return bip39.mnemonicToSeed(mnemonic)
}

/**
     *
     * @param Buffer(masterseed)
     * @returns root masternode  hdkey
     */
export function generateHDKeyFromSeed(seed){
    return hdkey.fromMasterSeed(seed);
}

/**
     *
     * @param (masternode, accountIndex)
     * @returns (privKey, address)
     */
export function genKeys(rootxf,index){
    // get address node
    const addrNode = rootxf.derive(`m/44'/60'/0'/0/${index}`);
    const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
    const addr = ethUtil.publicToAddress(pubKey).toString('hex');
    const address = ethUtil.toChecksumAddress(addr);

    return { privateKey: addrNode._privateKey.toString('hex'),
                publicKey:pubKey.toString('hex'), address, index  }
}



//module.exports={generateMnemonic,generateSeed, generateHDKeyFromSeed, genKeys}