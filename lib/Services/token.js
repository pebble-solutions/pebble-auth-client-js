"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenDataFromJWTPayload = exports.getLicenceObjectFromTokenData = void 0;
const User_1 = __importDefault(require("../Models/User"));
/**
 * Provide all token data and generate a new AuthenticatedLicenceObject instance.
 *
 * @param tokenData PebbleTokenData
 */
function getLicenceObjectFromTokenData(tokenData) {
    return {
        app: tokenData.client_id,
        issuer: tokenData.iss,
        tenant_id: tokenData.tid,
        user: new User_1.default({
            username: tokenData.sub,
            roles: tokenData.roles,
            level: tokenData.lv,
            displayName: tokenData.name
        })
    };
}
exports.getLicenceObjectFromTokenData = getLicenceObjectFromTokenData;
/**
 * Generated a PebbleTokenData instance from a dict representation of the JWT and the token string.
 *
 * @param jwtPayload            all information stored in the token
 * @param token                 original JWT string
 */
function getTokenDataFromJWTPayload(jwtPayload, token) {
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
        client_id: jwtPayload.client_id,
        jti: jwtPayload.jti,
        scope: jwtPayload.scope,
        token
    };
}
exports.getTokenDataFromJWTPayload = getTokenDataFromJWTPayload;
