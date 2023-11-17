import AuthenticatedLicenceInterface from "../Interfaces/AuthenticatedLicenceInterface";
import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import UserInterface from "../Interfaces/UserInterface";
import { AuthenticatedLicenceObject } from "../Types/AuthenticatedLicenceObject";
export default class AuthenticatedLicence implements AuthenticatedLicenceInterface {
    app: string;
    id: string;
    tenant_id: string;
    token: PebbleAuthTokenInterface;
    user: UserInterface;
    constructor(tokenData: AuthenticatedLicenceObject);
    getToken(): PebbleAuthTokenInterface;
    getUser(): UserInterface;
}
