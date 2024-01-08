import AuthenticatedLicenceInterface from "../Interfaces/AuthenticatedLicenceInterface";
import UserInterface from "../Interfaces/UserInterface";
import { AuthenticatedLicenceObject } from "../Types";
/**
 * This object represent information stored in a licence owned by a user.
 *
 * @param tokenData AuthenticatedLicenceObject
 */
export default class AuthenticatedLicence implements AuthenticatedLicenceInterface {
    app?: string;
    issuer?: string;
    tenant_id?: string;
    user: UserInterface;
    constructor(tokenData: AuthenticatedLicenceObject);
    /**
     * Return the user who own the licence
     */
    getUser(): UserInterface;
}
