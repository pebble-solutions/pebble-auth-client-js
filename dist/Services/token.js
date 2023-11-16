import PebbleAuthToken from "../Models/PebbleAuthToken";
import User from "../Models/User";
export function getLicenceObjectFromTokenData(tokenData) {
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
    };
}
export function getTokenDataFromJWTPayload(jwtPayload, token) {
    return {
        aud: jwtPayload.aud,
        iss: jwtPayload.iss,
        tid: jwtPayload.tid,
        sub: jwtPayload.sub,
        roles: jwtPayload.roles,
        lv: jwtPayload.lv,
        name: jwtPayload.name,
        iat: jwtPayload.iat,
        exp: jwtPayload.exp,
        token
    };
}
