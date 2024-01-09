"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represent an authenticated user.
 *
 * @param user UserObject
 */
class User {
    constructor(user) {
        this.displayName = user.displayName;
        this.level = user.level;
        this.roles = user.roles;
        this.username = user.username;
        this.scopes = user.scopes;
    }
    /**
     * Check if the user has the argument specified role.
     *
     * @param role          Role that must be checked
     */
    hasRole(role) {
        if (this.roles) {
            return this.roles.includes(role);
        }
        return false;
    }
    /**
     * Check if the user is granted on the provided scopes.
     *
     * @param scopes        A list of scopes
     * @param policy        ONE = Return true if one scope is valid, ALL = Return true if all scope are valid. Default
     *                      is ONE
     */
    hasScopes(scopes, policy) {
        policy = policy || 'ONE';
        if (!this.scopes || !scopes.length) {
            return false;
        }
        let count = 0;
        for (let i = 0; i < scopes.length; i++) {
            // This line gets the unfiltered action : api:action.filter become api:action
            const unfilteredScope = scopes[i].replace(/\.[\w\*]+$/gm, "");
            // This line gets the action name only
            const action = scopes[i].replace(/^\w+:(\w+)\.?[\w\*]*/gm, "$1");
            for (let j = 0; j < this.scopes.length; j++) {
                let userScope = this.scopes[j];
                // If the user scope use a joker (*), it is replaced with the current action (joker means any action).
                if (userScope.match(/:\*/gm)) {
                    userScope = userScope.replace(/:\*/, ":" + action);
                }
                if (scopes[i] === userScope || unfilteredScope === userScope) {
                    if ((policy === null || policy === void 0 ? void 0 : policy.toUpperCase()) === 'ONE') {
                        return true;
                    }
                    count += 1;
                }
            }
        }
        return count >= scopes.length;
    }
}
exports.default = User;
