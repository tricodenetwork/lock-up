import { SuiTransactionBlockResponse } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";

export type LoginContextType = {
  login: () => void;
  logout: () => void;
  setJwt: (e: string) => void;
  jwt: string | null;
  address: string | null;
  setAddress: (e: string) => void;
  handleZkProof: (idToken: string, id?: string) => Promise<void>;
  zkProofResult: any;
  signAndSubmitTransaction: (
    txb: Transaction,
    id?: string,
    recipient?: string,
    amount?: bigint
  ) => Promise<SuiTransactionBlockResponse | undefined>;
};

export interface JwtPayload {
  iss?: string;
  sub?: string; // Subject ID
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  nonce: string;
}
