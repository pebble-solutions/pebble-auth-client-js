export type PebbleTokenData = {
    /**
     * Application for which the token is generated
     */
    aud: string;
    /**
     * Expiration timestamp
     */
    exp: number;
    /**
     * Issued at time (timestamp)
     */
    iat?: number;
    /**
     * Issuer : Licence ID that emit the token
     */
    iss: string;
    /**
     * From 1-6 : user level affected by the licence
     */
    lv?: number;
    /**
     * Display name for the user
     */
    name?: string;
    /**
     * Roles attributed to the user
     */
    roles?: string[];
    /**
     * User email (used as username)
     */
    sub: string;
    /**
     * Tenant ID : customer id, client id... that will consume resources
     */
    tid?: string;
    /**
     * Token from which datas has been deserialized
     */
    token: string;
};
