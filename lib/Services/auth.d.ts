/// <reference types="node" />
import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import { JWTVerifyOptions } from "jose";
import { IncomingHttpHeaders } from "http";
/**
 * Authenticate a provided token into and return a valid PebbleAuthToken object
 *
 * @param token         Provided token
 * @param options       JWTVerifyOptions from jose library. The resource API should verify the audience claim at lease.
 *                      More documentation : https://github.com/panva/jose/blob/2cd1015ff7b11efdaa2af0a2026651b62c5e88ca/docs/interfaces/jwt_verify.JWTVerifyOptions.md
 */
export declare function auth(token: string, options?: JWTVerifyOptions): Promise<PebbleAuthTokenInterface>;
/**
 * Authenticate user using the HTTP Authorization header provided with the request
 *
 * The Authorization headers must be written according to the standard :
 * - Token content must start with "Bearer " string (ex : *Bearer full_token_string*)
 *
 * @param headers       All provided headers (including Authorization) in a IncomingHttpHeaders object
 * @param options       JWTVerifyOptions from jose library. The resource API should verify the audience claim at lease.
 *                      More documentation : https://github.com/panva/jose/blob/2cd1015ff7b11efdaa2af0a2026651b62c5e88ca/docs/interfaces/jwt_verify.JWTVerifyOptions.md
 *
 * @throws EmptyTokenError
 */
export declare function authFromHttpHeaders(headers: IncomingHttpHeaders, options?: JWTVerifyOptions): Promise<PebbleAuthTokenInterface>;
