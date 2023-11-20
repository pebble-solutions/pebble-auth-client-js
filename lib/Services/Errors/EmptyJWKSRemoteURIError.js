"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyJWKSRemoteURIError = void 0;
class EmptyJWKSRemoteURIError extends Error {
    constructor() {
        super("The public JWK Set URI is empty. It can be due to a misconfiguration on your server. Did you export " +
            "PBL_AUTH_PUBLIC_KEYS_URI environment variable on your system or on your .env file ?");
        this.name = "EmptyJWKSRemoteURIError";
    }
}
exports.EmptyJWKSRemoteURIError = EmptyJWKSRemoteURIError;
