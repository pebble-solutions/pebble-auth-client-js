import UserInterface from "../Interfaces/UserInterface";
import { UserObject } from "../Types/UserObject";
export default class User implements UserInterface {
    displayName?: string;
    level?: number;
    roles?: string[];
    username: string;
    constructor(user: UserObject);
    /**
     * Check if the user has the argument specified role.
     *
     * @param role          Role that must be checked
     */
    hasRole(role: string): boolean;
}
