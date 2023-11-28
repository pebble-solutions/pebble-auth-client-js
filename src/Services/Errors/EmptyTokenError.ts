/**
 * This error should be raised when the token is not provided or empty.
 */
export class EmptyTokenError extends Error
{
    constructor() {
        super("Empty token.");
        this.name = "EmptyTokenError"
    }
}