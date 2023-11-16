import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import AuthenticatedLicenceInterface from "../Interfaces/AuthenticatedLicenceInterface";
import UserInterface from "../Interfaces/UserInterface";
import AuthenticatedLicence from "./AuthenticatedLicence";
import {getLicenceObjectFromTokenData} from "../Services/token";
import {PebbleTokenData} from "../Types/PebbleTokenData";

export default class PebbleAuthToken implements PebbleAuthTokenInterface
{
    aud: string;
    exp: number;
    iat?: number;
    iss: string;
    lv?: number;
    name?: string;
    roles?: string[];
    sub: string;
    tid: string;
    token: string;

    constructor(token: PebbleTokenData) {
        this.aud = token.aud
        this.exp = token.exp
        this.iat = token.iat
        this.iss = token.iss
        this.lv = token.lv
        this.name = token.name
        this.roles = token.roles
        this.sub = token.sub
        this.tid = token.tid
        this.token = token.token
    }

    getAuthenticatedLicence(): AuthenticatedLicenceInterface {
        return new AuthenticatedLicence(getLicenceObjectFromTokenData(this));
    }

    getUser(): UserInterface {
        return this.getAuthenticatedLicence().getUser();
    }

}