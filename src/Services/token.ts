import {AuthenticatedLicenceObject} from "../Types/AuthenticatedLicenceObject";
import {PebbleTokenData} from "../Types/PebbleTokenData";
import PebbleAuthToken from "../Models/PebbleAuthToken";
import User from "../Models/User";
import {JWTPayload} from "jose";

export function getLicenceObjectFromTokenData(tokenData: PebbleTokenData): AuthenticatedLicenceObject
{
    return {
        app: tokenData.aud,
        id: tokenData.iss,
        tenant_id: tokenData.tid,
        token: new PebbleAuthToken(tokenData),
        user: new User({
            username: tokenData.sub,
            roles: tokenData.roles,
            level: tokenData.lv,
            displayName: tokenData.name
        })
    }
}

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

