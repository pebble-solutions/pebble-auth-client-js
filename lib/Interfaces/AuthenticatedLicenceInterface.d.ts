import UserInterface from "./UserInterface";
export default interface AuthenticatedLicenceInterface {
    /**
     * Instance of User class who own the licence
     */
    user: UserInterface;
    /**
     * Licence ID as registered in the Licence server
     */
    id: string;
    /**
     * Application for which the licence is generated
     */
    app: string;
    /**
     * Customer id, client id... that will consume resources
     */
    tenant_id?: string;
    /**
     * Should return the user who own the licence
     */
    getUser(): UserInterface;
}
