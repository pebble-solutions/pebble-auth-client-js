import UserInterface from "./UserInterface";
import AuthenticatedLicenceInterface from "./AuthenticatedLicenceInterface";
export default interface PebbleAuthTokenInterface {
    sub: string;
    iss: string;
    aud: string;
    tid: string;
    roles?: string[];
    lv?: number;
    name?: string;
    iat?: number;
    exp: number;
    token: string;
    getUser(): UserInterface;
    getAuthenticatedLicence(): AuthenticatedLicenceInterface;
}
