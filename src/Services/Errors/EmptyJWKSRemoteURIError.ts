export class EmptyJWKSRemoteURIError extends Error
{
    constructor() {
        super("The public JWK Set URI is empty. It can be due to a misconfiguration on your server. Did you export " +
            "PBL_JWKS_REMOTE_URI environment variable on your system or on your .env file ?");
        this.name = "EmptyJWKSRemoteURIError"
    }
}