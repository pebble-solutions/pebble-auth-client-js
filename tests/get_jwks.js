import {importRemotePublicKey, AUTH_PUBLIC_KEYS_URI, getJWKSet} from "../src/Services/key"

importRemotePublicKey(AUTH_PUBLIC_KEYS_URI).then(() => console.log(getJWKSet()))