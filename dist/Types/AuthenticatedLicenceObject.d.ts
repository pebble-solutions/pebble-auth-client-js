import PebbleAuthTokenInterface from "../Interfaces/PebbleAuthTokenInterface";
import UserInterface from "../Interfaces/UserInterface";
export type AuthenticatedLicenceObject = {
    app: string;
    id: string;
    tenant_id: string;
    token: PebbleAuthTokenInterface;
    user: UserInterface;
};
