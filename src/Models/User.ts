import UserInterface from "../Interfaces/UserInterface";
import {UserObject} from "../Types/UserObject";

export default class User implements UserInterface
{
    public displayName?: string

    public level?: number

    public roles?: string[]

    public username: string

    constructor(user: UserObject) {
        this.displayName = user.displayName
        this.level = user.level
        this.roles = user.roles
        this.username = user.username
    }

    /**
     * Check if the user has the argument specified role.
     *
     * @param role          Role that must be checked
     */
    hasRole(role: string): boolean {
        if (this.roles) {
            return this.roles.includes(role)
        }
        return false;
    }

}