import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import AuthenticatedLicenceInterface from "../Interfaces/AuthenticatedLicenceInterface";
import UserInterface from "../Interfaces/UserInterface";
import { PebbleTokenData } from "../Types";
/**
 * his object represent all the information in a token provided by a Pebble licence server.
 *
 * @param token PebbleTokenData
 */
export default class PebbleAuthToken implements PebbleAuthTokenInterface {
    aud: string | string[] | undefined;
    exp: number;
    iat?: number;
    iss: string;
    lv?: number;
    name?: string;
    roles?: string[];
    scopes?: string[];
    sub: string;
    tid?: string;
    client_id?: string;
    token: string;
    constructor(token: PebbleTokenData);
    /**
     * Get the authenticated licence object described by the token
     */
    getAuthenticatedLicence(): AuthenticatedLicenceInterface;
    /**
     * Get the user who own the token
     */
    getUser(): UserInterface;
}
