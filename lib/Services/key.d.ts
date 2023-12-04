import { JSONWebKeySet } from "jose";
/**
 * Return all the JWK currently stored in jwks.json file or in the process memory.
 */
export declare function getJWKSet(): Promise<JSONWebKeySet>;
/**
 * Import the public RSA key from a remote server to the local /var/credentials/auth/jwks.json file.
 *
 * @param remoteLocation        Remote file that must be imported
 */
export declare function importRemotePublicKey(remoteLocation: string): Promise<void>;
