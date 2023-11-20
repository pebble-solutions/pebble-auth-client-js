export class EmptyJWKSError extends Error
{
    constructor() {
        super("Public keys set is empty. jwks.json file might be corrupted, empty or not exist.");
        this.name = "EmptyJWKSError"
    }
}