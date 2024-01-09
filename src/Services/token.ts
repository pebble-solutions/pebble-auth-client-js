import {AuthenticatedLicenceObject} from "../Types";
import {PebbleTokenData} from "../Types";
import User from "../Models/User";
import {JWTPayload} from "jose";

/**
 * Provide all token data and generate a new AuthenticatedLicenceObject instance.
 *
 * @param tokenData PebbleTokenData
 */
export function getLicenceObjectFromTokenData(tokenData: PebbleTokenData): AuthenticatedLicenceObject
{
    return {
        app: tokenData.client_id,
        issuer: tokenData.iss,
        tenant_id: tokenData.tid,
        user: new User({
            username: tokenData.sub,
            roles: tokenData.roles,
            level: tokenData.lv,
            displayName: tokenData.name,
            scopes: tokenData.scope?.split(" ")
        })
    }
}

/**
 * Generated a PebbleTokenData instance from a dict representation of the JWT and the token string.
 *
 * @param jwtPayload            all information stored in the token
 * @param token                 original JWT string
 */
export function getTokenDataFromJWTPayload(jwtPayload: JWTPayload, token: string): PebbleTokenData
{
    return {
        aud: <string | string[]>jwtPayload.aud,
        iss: <string>jwtPayload.iss,
        tid: <string | undefined>jwtPayload.tid,
        sub: <string>jwtPayload.sub,
        roles: <string[] | undefined>jwtPayload.roles,
        lv: <number | undefined>jwtPayload.lv,
        name: <string>jwtPayload.name,
        iat: jwtPayload.iat,
        exp: <number>jwtPayload.exp,
        client_id: <string>jwtPayload.client_id,
        jti: <string>jwtPayload.jti,
        scope: <string>jwtPayload.scope,
        token
    }
}

