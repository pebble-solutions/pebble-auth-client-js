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
exports.importRemotePublicKey = exports.getJWKSet = void 0;
const https_1 = require("https");
const fs_1 = require("fs");
const EmptyJWKSRemoteURIError_1 = require("./Errors/EmptyJWKSRemoteURIError");
const EmptyJWKSError_1 = require("./Errors/EmptyJWKSError");
/**
 * Return the location of remote pebble authenticator public keys set (JWKS) as defined in the sys global
 * environment variables
 */
const JWKS_REMOTE_URI = process.env.PBL_JWKS_REMOTE_URI;
/**
 * Contains the local folder for temporary store authentication credentials. Storing locally the credentials improves
 * server response.
 */
const CERTS_FOLDER = "./var/credentials/auth";
/**
 * Contains the local path for the public keys set (JWKS)
 */
const JWKS_LOCAL_PATH = CERTS_FOLDER + "/jwks.json";
/**
 * Get the public keys stored in /var/credentials/auth/certs
 * This file contain a copy of the pebble auth public keys formatted in
 * JWK Set format.
 */
function getJWKSet() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!process.env.PBL_AUTH_JWKS) {
            console.log("NOTICE: Store JWKS in process environment variable");
            process.env.PBL_AUTH_JWKS = JSON.stringify(yield readPublicKey());
        }
        return JSON.parse(process.env.PBL_AUTH_JWKS);
    });
}
exports.getJWKSet = getJWKSet;
/**
 * Import the public RSA key from a remote server to the local /var/credentials/auth/jwks.json file.
 *
 * @param remoteLocation        Remote file that must be imported
 */
function importRemotePublicKey(remoteLocation) {
    return new Promise((resolve, reject) => {
        (0, fs_1.mkdirSync)(CERTS_FOLDER, { recursive: true });
        (0, fs_1.writeFileSync)(JWKS_LOCAL_PATH, "");
        const file = (0, fs_1.createWriteStream)(JWKS_LOCAL_PATH);
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
        if (!(0, fs_1.existsSync)(JWKS_LOCAL_PATH)) {
            if (!JWKS_REMOTE_URI) {
                throw new EmptyJWKSRemoteURIError_1.EmptyJWKSRemoteURIError();
            }
            yield importRemotePublicKey(JWKS_REMOTE_URI);
        }
        const data = (0, fs_1.readFileSync)(JWKS_LOCAL_PATH, 'utf8');
        if (!data) {
            throw new EmptyJWKSError_1.EmptyJWKSError();
        }
        return JSON.parse(data);
    });
}
