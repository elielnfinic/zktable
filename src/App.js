import * as bip39 from "@scure/bip39";
import * as bip32 from "@scure/bip32";
import {grindKey, getPublicKey} from "micro-starknet";

function App() {
  const get_mnemonic = async () => {
    const mnemonic = process.env.REACT_APP_MNEMO_PHRASE;
    const seed = await bip39.mnemonicToSeed(mnemonic);
    let hdnode = bip32.HDKey.fromMasterSeed(seed);

    const accountIndex = 0;

    hdnode = hdnode.derive(`m/44'/9004'/0'/0'/${accountIndex}`);
    console.log(hdnode);

    const res = grindKey(hdnode.privateKey);
    const pub_key = getPublicKey(res);
    console.log(res);
    console.log("Public key is ", pub_key.toString());

    return hdnode;

    //const pkey = doEIP2645Hashing(hdnode.privateKey);
  }

  get_mnemonic();

  return (
    <div className="App">
      Yes 
    </div>
  );
}

export default App;
