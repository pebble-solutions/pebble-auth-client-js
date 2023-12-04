/// <reference types="node" />
import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import { IncomingHttpHeaders } from "http";
/**
 * Authenticate a provided token into and return a valid PebbleAuthToken object
 *
 * @param token         Provided token
 */
export declare function auth(token: string): Promise<PebbleAuthTokenInterface>;
/**
 * Authenticate user using the HTTP Authorization header provided with the request
 *
 * The Authorization headers must be written according to the standard :
 * - Token content must start with "Bearer " string (ex : *Bearer full_token_string*)
 *
 * @param headers       All provided headers (including Authorization) in a IncomingHttpHeaders object
 *
 * @throws EmptyTokenError
 */
export declare function authFromHttpHeaders(headers: IncomingHttpHeaders): Promise<PebbleAuthTokenInterface>;
