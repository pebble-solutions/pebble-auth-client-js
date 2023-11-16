import {JSONWebKeySet, JWK} from "jose";
import { get as getHttp } from "http"
import { createWriteStream, readFileSync } from "fs"

/**
 * Return the location of pebble authenticator public as defined in the sys global
 * environment variables
 */
export const AUTH_PUBLIC_KEYS_URI = process.env.PBL_AUTH_PUBLIC_KEYS_URI

/**
 * Get the public keys stored in /var/credentials/auth/certs
 * This file contain a copy of the pebble auth public keys formatted in
 * JWK Set format.
 */
export function getJWKSet(): JSONWebKeySet
{
    if (!process.env.PBL_AUTH_JWKS) {
        process.env.PBL_AUTH_JWKS = JSON.stringify(readPublicKey())
    }
    return JSON.parse(process.env.PBL_AUTH_JWKS)
    /*return {
        keys: [
            {
                kty: 'RSA',
                e: 'AQAB',
                n: '12oBZRhCiZFJLcPg59LkZZ9mdhSMTKAQZYq32k_ti5SBB6jerkh-WzOMAO664r_qyLkqHUSp3u5SbXtseZEpN3XPWGKSxjsy-1JyEFTdLSYe6f9gfrmxkUF_7DTpq0gn6rntP05g2-wFW50YO7mosfdslfrTJYWHFhJALabAeYirYD7-9kqq9ebfFMF4sRRELbv9oi36As6Q9B3Qb5_C1rAzqfao_PCsf9EPsTZsVVVkA5qoIAr47lo1ipfiBPxUCCNSdvkmDTYgvvRm6ZoMjFbvOtgyts55fXKdMWv7I9HMD5HwE9uW839PWA514qhbcIsXEYSFMPMV6fnlsiZvQQ',
                alg: 'PS256',
            }
        ],
    }*/
}

/**
 * Import the public RSA key from a remote server to the local
 * /var/credentials/auth/certs file and store it in sys environment
 * variable.
 *
 * @param remoteLocation        Remote file that must be imported
 */
export function importRemotePublicKey(remoteLocation: string): Promise<void>
{
    return new Promise((resolve, reject) => {
        const file = createWriteStream("/var/credentials/auth/certs")
        getHttp(remoteLocation, (resp) => {
            const stream = resp.pipe(file);

            stream.on("finish", () => {
                resolve()
            })
            stream.on("error", (err) => {
                reject(err)
            })
        })
    })
}

/**
 * Read the public RSA key from /var/credentials/auth/certs and convert it into
 * JWK Set
 */
function readPublicKey(): Promise<JSONWebKeySet>
{
    const data = readFileSync("/var/credentials/auth/certs", 'utf8')
    return JSON.parse(data)
}