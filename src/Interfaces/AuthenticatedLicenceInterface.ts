import UserInterface from "./UserInterface";

export default interface AuthenticatedLicenceInterface {

    /**
     * Instance of User class who own the licence
     */
    user: UserInterface

    /**
     * Licence server that emits the authorisation
     */
    issuer: string

    /**
     * Application for which the licence is generated. This can be the application name or the client ID
     */
    app?: string

    /**
     * Customer id, client id... that will consume resources
     */
    tenant_id?: string

    /**
     * Should return the user who own the licence
     */
    getUser (): UserInterface

}