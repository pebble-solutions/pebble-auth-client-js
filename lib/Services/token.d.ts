import { AuthenticatedLicenceObject } from "../Types/AuthenticatedLicenceObject";
import { PebbleTokenData } from "../Types/PebbleTokenData";
import { JWTPayload } from "jose";
export declare function getLicenceObjectFromTokenData(tokenData: PebbleTokenData): AuthenticatedLicenceObject;
export declare function getTokenDataFromJWTPayload(jwtPayload: JWTPayload, token: string): PebbleTokenData;
