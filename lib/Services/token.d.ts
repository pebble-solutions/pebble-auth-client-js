import { AuthenticatedLicenceObject } from "../Types";
import { PebbleTokenData } from "../Types";
import { JWTPayload } from "jose";
/**
 * Provide all token data and generate a new AuthenticatedLicenceObject instance.
 *
 * @param tokenData PebbleTokenData
 */
export declare function getLicenceObjectFromTokenData(tokenData: PebbleTokenData): AuthenticatedLicenceObject;
/**
 * Generated a PebbleTokenData instance from a dict representation of the JWT and the token string.
 *
 * @param jwtPayload            all information stored in the token
 * @param token                 original JWT string
 */
export declare function getTokenDataFromJWTPayload(jwtPayload: JWTPayload, token: string): PebbleTokenData;
