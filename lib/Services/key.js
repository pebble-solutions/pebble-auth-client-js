"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importRemotePublicKey = exports.getJWKSet = exports.AUTH_PUBLIC_KEYS_URI = void 0;
const https_1 = require("https");
const fs_1 = require("fs");
/**
 * Return the location of pebble authenticator public as defined in the sys global
 * environment variables
 */
exports.AUTH_PUBLIC_KEYS_URI = process.env.PBL_AUTH_PUBLIC_KEYS_URI;
/**
 * Get the public keys stored in /var/credentials/auth/certs
 * This file contain a copy of the pebble auth public keys formatted in
 * JWK Set format.
 */
function getJWKSet() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!process.env.PBL_AUTH_JWKS) {
            process.env.PBL_AUTH_JWKS = JSON.stringify(yield readPublicKey());
        }
        return JSON.parse(process.env.PBL_AUTH_JWKS);
        // The following key is fake. For development only
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
    });
}
exports.getJWKSet = getJWKSet;
/**
 * Import the public RSA key from a remote server to the local
 * /var/credentials/auth/certs file and store it in sys environment
 * variable.
 *
 * @param remoteLocation        Remote file that must be imported
 */
function importRemotePublicKey(remoteLocation) {
    return new Promise((resolve, reject) => {
        (0, fs_1.mkdirSync)("./var/credentials/auth", { recursive: true });
        (0, fs_1.writeFileSync)("./var/credentials/auth/certs", "");
        const file = (0, fs_1.createWriteStream)("./var/credentials/auth/certs");
        (0, https_1.get)(remoteLocation, (resp) => {
            const stream = resp.pipe(file);
            stream.on("finish", () => {
                resolve();
            });
            stream.on("error", (err) => {
                reject(err);
            });
        });
    });
}
exports.importRemotePublicKey = importRemotePublicKey;
/**
 * Read the public RSA key from /var/credentials/auth/certs and convert it into
 * JWK Set
 */
function readPublicKey() {
    return __awaiter(this, void 0, void 0, function* () {
        const path = "./var/credentials/auth/certs";
        if (!(0, fs_1.existsSync)(path)) {
            yield importRemotePublicKey(exports.AUTH_PUBLIC_KEYS_URI);
        }
        const data = (0, fs_1.readFileSync)(path, 'utf8');
        return JSON.parse(data);
    });
}
