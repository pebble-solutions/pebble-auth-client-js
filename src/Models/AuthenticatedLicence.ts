import AuthenticatedLicenceInterface from "../Interfaces/AuthenticatedLicenceInterface";
import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import UserInterface from "../Interfaces/UserInterface";
import {AuthenticatedLicenceObject} from "../Types/AuthenticatedLicenceObject";

export default class AuthenticatedLicence implements AuthenticatedLicenceInterface
{
    app: string;
    id: string;
    tenant_id: string;
    token: PebbleAuthTokenInterface;
    user: UserInterface;

    constructor(tokenData: AuthenticatedLicenceObject) {
        this.app = tokenData.app
        this.id = tokenData.id
        this.tenant_id = tokenData.tenant_id
        this.token = tokenData.token
        this.user = tokenData.user
    }

    getToken(): PebbleAuthTokenInterface {
        return this.token;
    }

    getUser(): UserInterface {
        return this.user;
    }

}