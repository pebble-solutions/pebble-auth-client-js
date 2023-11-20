"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthenticatedLicence_1 = __importDefault(require("./AuthenticatedLicence"));
const token_1 = require("../Services/token");
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
    getAuthenticatedLicence() {
        return new AuthenticatedLicence_1.default((0, token_1.getLicenceObjectFromTokenData)(this));
    }
    getUser() {
        return this.getAuthenticatedLicence().getUser();
    }
}
exports.default = PebbleAuthToken;
