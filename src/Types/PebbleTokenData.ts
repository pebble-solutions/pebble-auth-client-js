export type PebbleTokenData = {
    /**
     * Application for which the token is generated
     */
    aud: string | string[],

    /**
     * Expiration timestamp
     */
    exp: number,

    /**
     * Issued at time (timestamp)
     */
    iat?: number,

    /**
     * Issuer : Licence ID that emit the token
     */
    iss: string,

    /**
     * From 1-6 : user level affected by the licence
     */
    lv?: number,

    /**
     * Display name for the user
     */
    name?: string,

    /**
     * Roles attributed to the user
     */
    roles?: string[],

    /**
     * List of scope granted by the token onto the audience. Each term is separated by a space.
     */
    scope?: string,

    /**
     * User email (used as username)
     */
    sub: string,

    /**
     * Tenant ID : customer id, client id... that will consume resources
     */
    tid?: string,

    /**
     * Token unique ID generated by authentication server
     */
    jti: string

    /**
     * The application ID registered in firestore. This refers to the frontend application that consume the resources.
     */
    client_id: string,

    /**
     * Token from which datas has been deserialized
     */
    token: string
}