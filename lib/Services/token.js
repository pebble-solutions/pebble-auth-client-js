"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenDataFromJWTPayload = exports.getLicenceObjectFromTokenData = void 0;
const PebbleAuthToken_1 = __importDefault(require("../Models/PebbleAuthToken"));
const User_1 = __importDefault(require("../Models/User"));
function getLicenceObjectFromTokenData(tokenData) {
    return {
        app: tokenData.aud,
        id: tokenData.iss,
        tenant_id: tokenData.tid,
        token: new PebbleAuthToken_1.default(tokenData),
        user: new User_1.default({
            username: tokenData.sub,
            roles: tokenData.roles,
            level: tokenData.lv,
            displayName: tokenData.name
        })
    };
}
exports.getLicenceObjectFromTokenData = getLicenceObjectFromTokenData;
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
        token
    };
}
exports.getTokenDataFromJWTPayload = getTokenDataFromJWTPayload;
