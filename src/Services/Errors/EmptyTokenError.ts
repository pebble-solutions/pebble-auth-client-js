export class EmptyTokenError extends Error
{
    constructor() {
        super("Empty token.");
        this.name = "EmptyTokenError"
    }
}