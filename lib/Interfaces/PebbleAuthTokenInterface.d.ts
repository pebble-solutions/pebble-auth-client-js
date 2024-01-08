import UserInterface from "./UserInterface";
import AuthenticatedLicenceInterface from "./AuthenticatedLicenceInterface";
import { PebbleTokenData } from "../Types";
export default interface PebbleAuthTokenInterface extends PebbleTokenData {
    /**
     * Should get the user who own the token
     */
    getUser(): UserInterface;
    /**
     * Should get the authenticated licence object described by the token
     */
    getAuthenticatedLicence(): AuthenticatedLicenceInterface;
}
