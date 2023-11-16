import {JSONWebKeySet} from "jose";

/**
 * Get the public keys stored in /var/credentials/auth/certs
 * This file contain a copy of the pebble auth public keys formatted in
 * JWK Set format.
 */
export function getJWKSet(): JSONWebKeySet
{
    return {
        keys: [
            {
                kty: 'RSA',
                e: 'AQAB',
                n: '12oBZRhCiZFJLcPg59LkZZ9mdhSMTKAQZYq32k_ti5SBB6jerkh-WzOMAO664r_qyLkqHUSp3u5SbXtseZEpN3XPWGKSxjsy-1JyEFTdLSYe6f9gfrmxkUF_7DTpq0gn6rntP05g2-wFW50YO7mosfdslfrTJYWHFhJALabAeYirYD7-9kqq9ebfFMF4sRRELbv9oi36As6Q9B3Qb5_C1rAzqfao_PCsf9EPsTZsVVVkA5qoIAr47lo1ipfiBPxUCCNSdvkmDTYgvvRm6ZoMjFbvOtgyts55fXKdMWv7I9HMD5HwE9uW839PWA514qhbcIsXEYSFMPMV6fnlsiZvQQ',
                alg: 'PS256',
            }
        ],
    }
}

/**
 * Import the public RSA key from a remote server to the local
 * /var/credentials/auth/certs file
 *
 * @param remoteLocation        Remote file that must be imported
 */
export function importRemotePublicKey(remoteLocation: string): void
{

}

/**
 * Return the location of pebble authenticator public as defined in the global
 * environment configuration
 */
export function getRemoteKeysLocationURI(): string
{
    return ""
}