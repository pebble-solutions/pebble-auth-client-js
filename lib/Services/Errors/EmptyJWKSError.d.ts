/**
 * This error should be raised when the JWK set is empty. jwks.json might be corrupted, empty or not exists.
 */
export declare class EmptyJWKSError extends Error {
    constructor();
}
