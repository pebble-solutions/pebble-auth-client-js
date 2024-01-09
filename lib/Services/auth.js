"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authFromHttpHeaders = exports.auth = void 0;
const jose_1 = require("jose");
const token_1 = require("./token");
const PebbleAuthToken_1 = __importDefault(require("../Models/PebbleAuthToken"));
const key_1 = require("./key");
const Errors_1 = require("./Errors");
/**
 * Authenticate a provided token into and return a valid PebbleAuthToken object
 *
 * @param token         Provided token
 * @param options       JWTVerifyOptions from jose library. The resource API should verify the audience claim at lease.
 *                      More documentation : https://github.com/panva/jose/blob/2cd1015ff7b11efdaa2af0a2026651b62c5e88ca/docs/interfaces/jwt_verify.JWTVerifyOptions.md
 */
function auth(token, options) {
    return __awaiter(this, void 0, void 0, function* () {
        options = options || {};
        options.typ = "at+jwt";
        const keySet = yield (0, key_1.getJWKSet)();
        const JWKS = (0, jose_1.createLocalJWKSet)(keySet);
        const { payload } = yield (0, jose_1.jwtVerify)(token, JWKS, options);
        const tokenData = (0, token_1.getTokenDataFromJWTPayload)(payload, token);
        return new PebbleAuthToken_1.default(tokenData);
    });
}
exports.auth = auth;
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
function authFromHttpHeaders(headers, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (headers.authorization) {
            const token = headers.authorization.replace(/^Bearer /, "");
            return yield auth(token, options);
        }
        throw new Errors_1.EmptyTokenError();
    });
}
exports.authFromHttpHeaders = authFromHttpHeaders;
