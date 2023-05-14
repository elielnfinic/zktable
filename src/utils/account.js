import * as bip39 from "@scure/bip39";
import * as bip32 from "@scure/bip32";
import * as starknet from "micro-starknet";

export async function generate_mnemonic () {
    const mnemonic = bip39.generateMnemonic();
    return mnemonic;
}

export async function get_keys (mnemonic, accountIndex) {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    console.log("Seed: ", seed);
    let hdnode = bip32.HDKey.fromMasterSeed(seed);
 
    hdnode = hdnode.derive(`m/44'/9004'/0'/0'/${accountIndex}`);
    // starknet.getStarkKey(hdnode.privateKey);
    const gKey = starknet.grindKey(hdnode.privateKey);
    console.log(gKey);
    const stark_key = starknet.getStarkKey(gKey);
    console.log(stark_key);
    console.log(hdnode.privateKey);
    console.log(hdnode.publicKey);
    // const private_key = '0x'+(hdnode.privKey).toString(16);
    return hdnode.privKey;
}

export async function get_public_key (private_key){
    const public_key = '0x'+(bip32.HDKey.fromExtendedKey(private_key).pubKey).toString(16);
    return public_key;
}

export async function get_mnemonic() {
    const mnemonic = bip39.entropyToMnemonic('00000000000000000000000000000fff');//generateMnemonic();
    return mnemonic;
}