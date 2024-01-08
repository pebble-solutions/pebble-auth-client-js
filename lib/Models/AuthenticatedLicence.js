"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represent information stored in a licence owned by a user.
 *
 * @param tokenData AuthenticatedLicenceObject
 */
class AuthenticatedLicence {
    constructor(tokenData) {
        this.app = tokenData.app;
        this.issuer = tokenData.issuer;
        this.tenant_id = tokenData.tenant_id;
        this.user = tokenData.user;
    }
    /**
     * Return the user who own the licence
     */
    getUser() {
        return this.user;
    }
}
exports.default = AuthenticatedLicence;
