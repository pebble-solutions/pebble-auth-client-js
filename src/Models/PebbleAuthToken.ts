import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import AuthenticatedLicenceInterface from "../Interfaces/AuthenticatedLicenceInterface";
import UserInterface from "../Interfaces/UserInterface";
import AuthenticatedLicence from "./AuthenticatedLicence";
import {getLicenceObjectFromTokenData} from "../Services/token";
import {PebbleTokenData} from "../Types";

/**
 * This object represent all the information in a token provided by a Pebble licence server.
 *
 * It implements the RFC9068 standard that document profile for oAuth 2.0 JWT access token.
 * Read more : https://datatracker.ietf.org/doc/html/rfc9068
 *
 * @param token PebbleTokenData
 */
export default class PebbleAuthToken implements PebbleAuthTokenInterface
{
    aud: string | string[];
    exp: number;
    iat?: number;
    iss: string;
    lv?: number;
    name?: string;
    roles?: string[];
    scope?: string;
    sub: string;
    tid?: string;
    client_id: string;
    jti: string;
    token: string;

    constructor(token: PebbleTokenData) {
        this.aud = token.aud
        this.exp = token.exp
        this.iat = token.iat
        this.iss = token.iss
        this.lv = token.lv
        this.name = token.name
        this.roles = token.roles
        this.scope = token.scope
        this.sub = token.sub
        this.tid = token.tid
        this.client_id = token.client_id
        this.jti = token.jti
        this.token = token.token
    }

    /**
     * Get the authenticated licence object described by the token
     */
    getAuthenticatedLicence(): AuthenticatedLicenceInterface {
        return new AuthenticatedLicence(getLicenceObjectFromTokenData(this));
    }

    /**
     * Get the user who own the token
     */
    getUser(): UserInterface {
        return this.getAuthenticatedLicence().getUser();
    }

}