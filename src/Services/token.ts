import {AuthenticatedLicenceObject} from "../Types/AuthenticatedLicenceObject";
import {PebbleTokenData} from "../Types/PebbleTokenData";
import PebbleAuthToken from "../Models/PebbleAuthToken";
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
        app: tokenData.aud,
        id: tokenData.iss,
        tenant_id: tokenData.tid,
        user: new User({
            username: tokenData.sub,
            roles: tokenData.roles,
            level: tokenData.lv,
            displayName: tokenData.name
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
        aud: <string>jwtPayload.aud,
        iss: <string>jwtPayload.iss,
        tid: <string>jwtPayload.tid,
        sub: <string>jwtPayload.sub,
        roles: <string[]>jwtPayload.roles,
        lv: <number>jwtPayload.lv,
        name: <string>jwtPayload.name,
        iat: jwtPayload.iat,
        exp: <number>jwtPayload.exp,
        token
    }
}

