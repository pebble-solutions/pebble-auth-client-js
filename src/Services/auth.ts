import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import {jwtVerify, createLocalJWKSet} from "jose";
import {getTokenDataFromJWTPayload} from "./token";
import PebbleAuthToken from "../Models/PebbleAuthToken";
import {getJWKSet} from "./key";

/**
 * Authenticate a provided token into and return a valid PebbleAuthToken object
 *
 * @param token         Provided token
 */
export async function auth(token: string): Promise<PebbleAuthTokenInterface>
{
    const JWKS = createLocalJWKSet(getJWKSet())

    const { payload, protectedHeader } = await jwtVerify(token, JWKS)

    const tokenData = getTokenDataFromJWTPayload(payload, token)

    return new PebbleAuthToken(tokenData)

}

/**
 * Authenticate user using the HTTP Authorization header provided with the request
 */
export async function authFromHttpHeaders(): Promise<PebbleAuthTokenInterface>
{
    return await auth("http_provided_token")
}
