import { JSONWebKeySet } from "jose";
/**
 * Get the public keys stored in /var/credentials/auth/certs
 * This file contain a copy of the pebble auth public keys formatted in
 * JWK Set format.
 */
export declare function getJWKSet(): Promise<JSONWebKeySet>;
/**
 * Import the public RSA key from a remote server to the local /var/credentials/auth/jwks.json file.
 *
 * @param remoteLocation        Remote file that must be imported
 */
export declare function importRemotePublicKey(remoteLocation: string): Promise<void>;
