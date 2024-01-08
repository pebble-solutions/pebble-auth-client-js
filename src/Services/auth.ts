import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import {jwtVerify, createLocalJWKSet} from "jose";
import {getTokenDataFromJWTPayload} from "./token";
import PebbleAuthToken from "../Models/PebbleAuthToken";
import {getJWKSet} from "./key";
import {IncomingHttpHeaders} from "http";
import {EmptyTokenError} from "./Errors";

/**
 * Authenticate a provided token into and return a valid PebbleAuthToken object
 *
 * @param token         Provided token
 */
export async function auth(token: string): Promise<PebbleAuthTokenInterface>
{
    const keySet = await getJWKSet()
    const JWKS = createLocalJWKSet(keySet)

    const { payload } = await jwtVerify(token, JWKS)

    const tokenData = getTokenDataFromJWTPayload(payload, token)

    return new PebbleAuthToken(tokenData)

}

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
export async function authFromHttpHeaders(headers: IncomingHttpHeaders): Promise<PebbleAuthTokenInterface>
{
    if (headers.authorization) {
        const token = headers.authorization.replace(/^Bearer /, "")
        return await auth(token)
    }

    throw new EmptyTokenError()
}
