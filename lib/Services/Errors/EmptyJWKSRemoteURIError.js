"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyJWKSRemoteURIError = void 0;
/**
 * This error should be raised when `PBL_JWKS_REMOTE_URI` environment variable is empty or not set.
 * If this error occurs, you should export `PBL_JWKS_REMOTE_URI`
 *
 * Local solution :
 *
 * ```shell
 * export PBL_JWKS_REMOTE_URI=https://SERVER_URI/path/jwks.json
 * ````
 *
 *  Docker solution :
 *
 *  ```Dockerfile
 *  ENV PBL_JWKS_REMOTE_URI=https://SERVER_URI/path/jwks.json
 *  ```
 */
class EmptyJWKSRemoteURIError extends Error {
    constructor() {
        const message = "The public JWK Set URI is empty. It can be due to a misconfiguration on your server. Did you export " +
            "PBL_JWKS_REMOTE_URI environment variable on your system or on your .env file ?";
        super(message);
        this.name = "EmptyJWKSRemoteURIError";
        console.error(this.name, message);
    }
}
exports.EmptyJWKSRemoteURIError = EmptyJWKSRemoteURIError;
