"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyTokenError = void 0;
class EmptyTokenError extends Error {
    constructor() {
        super("Empty token.");
        this.name = "EmptyTokenError";
    }
}
exports.EmptyTokenError = EmptyTokenError;
