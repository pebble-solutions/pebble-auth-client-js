import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
/**
 * Authenticate a provided token into and return a valid PebbleAuthToken object
 *
 * @param token         Provided token
 */
export declare function auth(token: string): Promise<PebbleAuthTokenInterface>;
/**
 * Authenticate user using the HTTP Authorization header provided with the request
 */
export declare function authFromHttpHeaders(): Promise<PebbleAuthTokenInterface>;
