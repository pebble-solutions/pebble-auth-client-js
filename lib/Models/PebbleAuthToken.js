"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthenticatedLicence_1 = __importDefault(require("./AuthenticatedLicence"));
const token_1 = require("../Services/token");
/**
 * his object represent all the information in a token provided by a Pebble licence server.
 *
 * @param token PebbleTokenData
 */
class PebbleAuthToken {
    constructor(token) {
        this.aud = token.aud;
        this.exp = token.exp;
        this.iat = token.iat;
        this.iss = token.iss;
        this.lv = token.lv;
        this.name = token.name;
        this.roles = token.roles;
        this.sub = token.sub;
        this.tid = token.tid;
        this.token = token.token;
    }
    /**
     * Get the authenticated licence object described by the token
     */
    getAuthenticatedLicence() {
        return new AuthenticatedLicence_1.default((0, token_1.getLicenceObjectFromTokenData)(this));
    }
    /**
     * Get the user who own the token
     */
    getUser() {
        return this.getAuthenticatedLicence().getUser();
    }
}
exports.default = PebbleAuthToken;
