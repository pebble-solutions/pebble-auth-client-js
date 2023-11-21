"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyJWKSRemoteURIError = void 0;
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
