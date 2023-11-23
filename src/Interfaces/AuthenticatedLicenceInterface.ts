import UserInterface from "./UserInterface";

export default interface AuthenticatedLicenceInterface {

    user: UserInterface

    id: string

    app: string

    tenant_id: string

    getUser (): UserInterface

}