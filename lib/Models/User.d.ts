import UserInterface from "../Interfaces/UserInterface";
import { UserObject } from "../Types";
/**
 * This object represent an authenticated user.
 *
 * @param user UserObject
 */
export default class User implements UserInterface {
    displayName?: string;
    level?: number;
    roles?: string[];
    username: string;
    scopes?: string[];
    constructor(user: UserObject);
    /**
     * Check if the user has the argument specified role.
     *
     * @param role          Role that must be checked
     */
    hasRole(role: string): boolean;
    /**
     * Check if the user is granted on the provided scopes.
     *
     * @param scopes        A list of scopes
     * @param policy        ONE = Return true if one scope is valid, ALL = Return true if all scope are valid. Default
     *                      is ONE
     */
    hasScopes(scopes: string[], policy?: string): boolean;
}
