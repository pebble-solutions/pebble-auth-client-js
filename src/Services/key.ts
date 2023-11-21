import {JSONWebKeySet} from "jose";
import { get as getHttps } from "https"
import { createWriteStream, readFileSync, writeFileSync, mkdirSync, existsSync } from "fs"
import {EmptyJWKSRemoteURIError} from "./Errors/EmptyJWKSRemoteURIError";
import {EmptyJWKSError} from "./Errors/EmptyJWKSError";

/**
 * Return the location of remote pebble authenticator public keys set (JWKS) as defined in the sys global
 * environment variables
 */
const JWKS_REMOTE_URI = process.env.PBL_JWKS_REMOTE_URI

/**
 * Contains the local folder for temporary store authentication credentials. Storing locally the credentials improves
 * server response.
 */
const CERTS_FOLDER: string = "./var/credentials/auth"

/**
 * Contains the local path for the public keys set (JWKS)
 */
const JWKS_LOCAL_PATH: string = CERTS_FOLDER+"/jwks.json"

/**
 * Get the public keys stored in /var/credentials/auth/certs
 * This file contain a copy of the pebble auth public keys formatted in
 * JWK Set format.
 */
export async function getJWKSet(): Promise<JSONWebKeySet>
{
    if (!process.env.PBL_AUTH_JWKS) {
        console.log("NOTICE: Store JWKS in process environment variable")
        process.env.PBL_AUTH_JWKS = JSON.stringify(await readPublicKey())
    }
    return JSON.parse(process.env.PBL_AUTH_JWKS)
}

/**
 * Import the public RSA key from a remote server to the local /var/credentials/auth/jwks.json file.
 *
 * @param remoteLocation        Remote file that must be imported
 */
export function importRemotePublicKey(remoteLocation: string): Promise<void>
{
    return new Promise((resolve, reject) => {
        mkdirSync(CERTS_FOLDER, { recursive: true })
        writeFileSync(JWKS_LOCAL_PATH, "")
        const file = createWriteStream(JWKS_LOCAL_PATH)
        getHttps(remoteLocation, (resp) => {
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
async function readPublicKey(): Promise<JSONWebKeySet>
{
    if (!existsSync(JWKS_LOCAL_PATH)) {
        if (!JWKS_REMOTE_URI) {
            throw new EmptyJWKSRemoteURIError()
        }
        await importRemotePublicKey(JWKS_REMOTE_URI)
    }

    const data = readFileSync(JWKS_LOCAL_PATH, 'utf8')

    if (!data) {
        throw new EmptyJWKSError()
    }

    return JSON.parse(data)
}