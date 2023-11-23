import AuthenticatedLicenceInterface from "../Interfaces/AuthenticatedLicenceInterface";
import UserInterface from "../Interfaces/UserInterface";
import {AuthenticatedLicenceObject} from "../Types/AuthenticatedLicenceObject";

export default class AuthenticatedLicence implements AuthenticatedLicenceInterface
{
    app: string;
    id: string;
    tenant_id: string;
    user: UserInterface;

    constructor(tokenData: AuthenticatedLicenceObject) {
        this.app = tokenData.app
        this.id = tokenData.id
        this.tenant_id = tokenData.tenant_id
        this.user = tokenData.user
    }

    getUser(): UserInterface {
        return this.user;
    }

}