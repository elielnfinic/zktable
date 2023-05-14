import * as bip39 from "@scure/bip39";
import * as bip32 from "@scure/bip32";
import * as starknet from "micro-starknet";
import { get_keys, get_mnemonic, get_private_key, get_public_key } from "./utils/account";
import {useState} from "react";

function App() {
  const [input_change, set_input_change] = useState("");

  const handle_txt_change = (e) => {
    set_input_change(e.target.value);
  }

  const handle_recover_account = async () => {
    if(input_change === "") return;
    const mnemo = input_change;
    const priv_key = await get_keys(mnemo, 0);
    // const pub_key = await get_public_key(priv_key);
    // console.log(priv_key);
    // console.log(pub_key);
  }

  const handle_new_account = async () => {
    const mnemo = await get_mnemonic();
    alert(mnemo);
  }

  return (
    <div className="App">
      <div>
        <div><textarea placeholder="Enter mnemo" onChange={handle_txt_change}></textarea></div>
        <button onClick={handle_recover_account}>Enter mnemonic</button>
      </div>
      <div>
        <button onClick={handle_new_account}>New account</button>
      </div>

      <div>
        <fieldset>
          <legend>Send message</legend>
          <div>
            <div><input placeholder="To: Starknet address" /></div>
            <button>Send message</button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
