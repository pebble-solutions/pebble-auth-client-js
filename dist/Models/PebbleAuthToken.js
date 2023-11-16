import AuthenticatedLicence from "./AuthenticatedLicence";
import { getLicenceObjectFromTokenData } from "../Services/token";
export default class PebbleAuthToken {
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
        return new AuthenticatedLicence(getLicenceObjectFromTokenData(this));
    }
    getUser() {
        return this.getAuthenticatedLicence().getUser();
    }
}
