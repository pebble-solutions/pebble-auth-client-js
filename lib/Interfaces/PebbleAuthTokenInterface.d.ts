import UserInterface from "./UserInterface";
import AuthenticatedLicenceInterface from "./AuthenticatedLicenceInterface";
export default interface PebbleAuthTokenInterface {
    /**
     * Application for which the token is generated
     */
    aud: string | string[] | undefined;
    /**
     * Expiration timestamp
     */
    exp: number;
    /**
     * Issued at time (timestamp)
     */
    iat?: number;
    /**
     * Issuer : Licence ID that emit the token
     */
    iss: string;
    /**
     * From 1-6 : user level affected by the licence
     */
    lv?: number;
    /**
     * Display name for the user
     */
    name?: string;
    /**
     * User roles (for descriptive matter, eg. in order to show or hide elements in frontend interface)
     * Ex : ["ROLE_MANAGER", "ROLE_ACCOUNTING"]
     */
    roles?: string[];
    /**
     * List of granted scopes
     */
    scopes?: string[];
    /**
     * User email (used as username)
     */
    sub: string;
    /**
     * Tenant ID : customer id, client id... that will consume resources
     */
    tid?: string;
    /**
     * Token from which datas has been deserialized
     */
    token: string;
    /**
     * Should get the user who own the token
     */
    getUser(): UserInterface;
    /**
     * Should get the authenticated licence object described by the token
     */
    getAuthenticatedLicence(): AuthenticatedLicenceInterface;
}
