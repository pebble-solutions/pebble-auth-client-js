"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyJWKSError = void 0;
class EmptyJWKSError extends Error {
    constructor() {
        super("Public keys set is empty. jwks.json file might be corrupted, empty or not exist.");
        this.name = "EmptyJWKSError";
    }
}
exports.EmptyJWKSError = EmptyJWKSError;