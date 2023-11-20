"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJWKSet = exports.importRemotePublicKey = exports.AUTH_PUBLIC_KEYS_URI = exports.authFromHttpHeaders = exports.auth = exports.User = exports.PebbleAuthToken = exports.AuthenticatedLicence = void 0;
const AuthenticatedLicence_1 = __importDefault(require("./Models/AuthenticatedLicence"));
exports.AuthenticatedLicence = AuthenticatedLicence_1.default;
const PebbleAuthToken_1 = __importDefault(require("./Models/PebbleAuthToken"));
exports.PebbleAuthToken = PebbleAuthToken_1.default;
const User_1 = __importDefault(require("./Models/User"));
exports.User = User_1.default;
const auth_1 = require("./Services/auth");
Object.defineProperty(exports, "auth", { enumerable: true, get: function () { return auth_1.auth; } });
Object.defineProperty(exports, "authFromHttpHeaders", { enumerable: true, get: function () { return auth_1.authFromHttpHeaders; } });
const key_1 = require("./Services/key");
Object.defineProperty(exports, "AUTH_PUBLIC_KEYS_URI", { enumerable: true, get: function () { return key_1.AUTH_PUBLIC_KEYS_URI; } });
Object.defineProperty(exports, "getJWKSet", { enumerable: true, get: function () { return key_1.getJWKSet; } });
Object.defineProperty(exports, "importRemotePublicKey", { enumerable: true, get: function () { return key_1.importRemotePublicKey; } });
