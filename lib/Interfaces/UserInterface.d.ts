export default interface UserInterface {
    /**
     * Unique username. Most of the time, it is a email address
     */
    username: string;
    /**
     * Roles affected to the user
     */
    roles?: string[];
    /**
     * From 1-6 : user level
     */
    level?: number;
    /**
     * Name of the user used for display
     */
    displayName?: string;
    /**
     * Should check if the user has the argument specified role.
     *
     * @param role          Role that must be checked
     */
    hasRole(role: string): boolean;
}
