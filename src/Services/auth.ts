import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import {jwtVerify, createLocalJWKSet, JWTVerifyOptions} from "jose";
import {getTokenDataFromJWTPayload} from "./token";
import PebbleAuthToken from "../Models/PebbleAuthToken";
import {getJWKSet} from "./key";
import {IncomingHttpHeaders} from "http";
import {EmptyTokenError} from "./Errors";

/**
 * Authenticate a provided token into and return a valid PebbleAuthToken object
 *
 * @param token         Provided token
 * @param options       JWTVerifyOptions from jose library. The resource API should verify the audience claim at lease.
 *                      More documentation : https://github.com/panva/jose/blob/2cd1015ff7b11efdaa2af0a2026651b62c5e88ca/docs/interfaces/jwt_verify.JWTVerifyOptions.md
 */
export async function auth(token: string, options?: JWTVerifyOptions): Promise<PebbleAuthTokenInterface>
{
    options = options || {}

    options.typ = "at+jwt"

    const keySet = await getJWKSet()
    const JWKS = createLocalJWKSet(keySet)

    const { payload } = await jwtVerify(token, JWKS, options)

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
 * @param options       JWTVerifyOptions from jose library. The resource API should verify the audience claim at lease.
 *                      More documentation : https://github.com/panva/jose/blob/2cd1015ff7b11efdaa2af0a2026651b62c5e88ca/docs/interfaces/jwt_verify.JWTVerifyOptions.md
 *
 * @throws EmptyTokenError
 */
export async function authFromHttpHeaders(headers: IncomingHttpHeaders, options?: JWTVerifyOptions): Promise<PebbleAuthTokenInterface>
{
    if (headers.authorization) {
        const token = headers.authorization.replace(/^Bearer /, "")
        return await auth(token, options)
    }

    throw new EmptyTokenError()
}
