import { JSONWebKeySet } from "jose";
/**
 * Return the location of pebble authenticator public as defined in the sys global
 * environment variables
 */
export declare const AUTH_PUBLIC_KEYS_URI: string | undefined;
/**
 * Get the public keys stored in /var/credentials/auth/certs
 * This file contain a copy of the pebble auth public keys formatted in
 * JWK Set format.
 */
export declare function getJWKSet(): JSONWebKeySet;
/**
 * Import the public RSA key from a remote server to the local
 * /var/credentials/auth/certs file and store it in sys environment
 * variable.
 *
 * @param remoteLocation        Remote file that must be imported
 */
export declare function importRemotePublicKey(remoteLocation: string): Promise<void>;
