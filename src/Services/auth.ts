import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import {jwtVerify, createLocalJWKSet} from "jose";
import {getTokenDataFromJWTPayload} from "./token";
import PebbleAuthToken from "../Models/PebbleAuthToken";
import {getJWKSet} from "./key";
import {IncomingHttpHeaders} from "http";
import {EmptyTokenError} from "./Errors/EmptyTokenError";

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
 */
export async function authFromHttpHeaders(headers: IncomingHttpHeaders): Promise<PebbleAuthTokenInterface>
{
    if (headers.authorization) {
        const token = headers.authorization.replace(/^Bearer /, "")
        return await auth(token)
    }

    throw new EmptyTokenError()
}
