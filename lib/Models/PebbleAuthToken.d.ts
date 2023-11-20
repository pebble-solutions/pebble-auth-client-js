import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import AuthenticatedLicenceInterface from "../Interfaces/AuthenticatedLicenceInterface";
import UserInterface from "../Interfaces/UserInterface";
import { PebbleTokenData } from "../Types/PebbleTokenData";
export default class PebbleAuthToken implements PebbleAuthTokenInterface {
    aud: string;
    exp: number;
    iat?: number;
    iss: string;
    lv?: number;
    name?: string;
    roles?: string[];
    sub: string;
    tid: string;
    token: string;
    constructor(token: PebbleTokenData);
    getAuthenticatedLicence(): AuthenticatedLicenceInterface;
    getUser(): UserInterface;
}
