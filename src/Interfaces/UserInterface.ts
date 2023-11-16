export default interface UserInterface {

    username: string

    roles?: string[]

    level?: number

    displayName?: string

    hasRole (role: string): boolean

}