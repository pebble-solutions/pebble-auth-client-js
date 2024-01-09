export type UserObject = {
    /**
     * Unique username. Most of the time, it is a email address
     */
    username: string,

    /**
     * Name of the user used for display
     */
    displayName?: string,

    /**
     * From 1-6 : user level
     */
    level?: number,

    /**
     * Roles affected to the user
     */
    roles?: string[]

    /**
     * Granted scopes onto the resource API
     */
    scopes?: string[]
}