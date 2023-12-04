/**
 * This error should be raised when `PBL_JWKS_REMOTE_URI` environment variable is empty or not set.
 * If this error occurs, you should export `PBL_JWKS_REMOTE_URI`
 *
 * Local solution :
 *
 * ```shell
 * export PBL_JWKS_REMOTE_URI=https://SERVER_URI/path/jwks.json
 * ````
 *
 *  Docker solution :
 *
 *  ```Dockerfile
 *  ENV PBL_JWKS_REMOTE_URI=https://SERVER_URI/path/jwks.json
 *  ```
 */
export declare class EmptyJWKSRemoteURIError extends Error {
    constructor();
}
