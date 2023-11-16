export default class AuthenticatedLicence {
    constructor(tokenData) {
        this.app = tokenData.app;
        this.id = tokenData.id;
        this.tenant_id = tokenData.tenant_id;
        this.token = tokenData.token;
        this.user = tokenData.user;
    }
    getToken() {
        return this.token;
    }
    getUser() {
        return this.user;
    }
}
