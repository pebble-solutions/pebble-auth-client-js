import UserInterface from "../Interfaces/UserInterface";
export type AuthenticatedLicenceObject = {
    /**
     * Application for which the licence is generated
     */
    app?: string;
    /**
     * Licence server that emits the authorisation
     */
    issuer: string;
    /**
     * Customer id, client id... that will consume resources
     */
    tenant_id?: string;
    /**
     * Instance of User class who own the licence
     */
    user: UserInterface;
};
