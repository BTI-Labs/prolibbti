import {BIP32Interface} from 'bip32';
import {Keypair, PublicKey} from '@bbachain/web3.js';
import {IChainAccount} from './IChainAccount';

export class AccountBBA implements IChainAccount {
  xpub: BIP32Interface;
  xprv?: BIP32Interface;

  keypair: Keypair;

  constructor(xpub: BIP32Interface, xprv: BIP32Interface) {
    this.xpub = xpub;
    this.xprv = xprv;
    this.keypair = Keypair.fromSeed(this.xprv.privateKey);
  }

  public toAddress() {
    return this.keypair.publicKey.toBase58();
  }

  public validateAddress() {
    return PublicKey.isOnCurve(this.toAddress());
  }
}
