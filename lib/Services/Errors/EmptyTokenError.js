"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyTokenError = void 0;
/**
 * This error should be raised when the token is not provided or empty.
 */
class EmptyTokenError extends Error {
    constructor() {
        super("Empty token.");
        this.name = "EmptyTokenError";
    }
}
exports.EmptyTokenError = EmptyTokenError;
