/**
 * This error should be raised when the JWK set is empty. jwks.json might be corrupted, empty or not exists.
 */
export class EmptyJWKSError extends Error
{
    constructor() {
        const message = "Public keys set is empty. jwks.json file might be corrupted, empty or not exist."
        super(message)
        this.name = "EmptyJWKSError"
        console.error(this.name, message)
    }
}