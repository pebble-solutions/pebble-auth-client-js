"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(user) {
        this.displayName = user.displayName;
        this.level = user.level;
        this.roles = user.roles;
        this.username = user.username;
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
}
exports.default = User;
