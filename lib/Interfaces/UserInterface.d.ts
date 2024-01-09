import { UserObject } from "../Types";
export default interface UserInterface extends UserObject {
    /**
     * Should check if the user has the argument specified role.
     *
     * @param role          Role that must be checked
     */
    hasRole(role: string): boolean;
    /**
     * Check if the user is granted on the provided scopes.
     *
     * @param scopes        A list of scopes
     * @param policy        ONE = Return true if one scope is valid, ALL = Return true if all scope are valid.
     */
    hasScopes(scopes: string[], policy?: string): boolean;
}
