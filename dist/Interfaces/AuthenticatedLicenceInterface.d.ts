import PasIdTokenInterface from "./PebbleAuthTokenInterface";
import UserInterface from "./UserInterface";
export default interface AuthenticatedLicenceInterface {
    user: UserInterface;
    id: string;
    app: string;
    tenant_id: string;
    token: PasIdTokenInterface;
    getUser(): UserInterface;
    getToken(): PasIdTokenInterface;
}
