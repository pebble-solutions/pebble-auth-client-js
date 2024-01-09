import UserInterface from "./UserInterface";
import {AuthenticatedLicenceObject} from "../Types";

export default interface AuthenticatedLicenceInterface extends AuthenticatedLicenceObject {
    /**
     * Should return the user who own the licence
     */
    getUser (): UserInterface

}