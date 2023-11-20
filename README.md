# Pebble Authentication Client for NodeJS

## Introduction

This library offer a client for authenticate user and licence management 
written in TypeScript compatible with NodeJS modules.

## Installation

```Shell
npm install @pebble-solutions/pebble-auth-client
```

## Usage

### Configuration

Before you can work with the library, you must define to a system environment 
variable the URI were is stored the public Json Web Key Set (JWKS file).

This file will be requested and store **temporary** on your NodeJS API Server.
Your server should be able to write on _./var/credentials/auth/jwks.json_ .
If the file does not exist, it will be created.

**If you start your NodeJS server directly from a terminal, run this command on
your terminal before starting your NodeJS server :**

```Shell
export PBL_JWKS_REMOTE_URI=https://AUTH_SERVER_URI/path/jwks.json
```

**If you start your NodeJS server within a Docker container, you should add this
line to your Dockefile :**

```Dockerfile
RUN export PBL_JWKS_REMOTE_URI=https://AUTH_SERVER_URI/path/jwks.json
```

### Authenticate with token string

```TypeScript
import {auth} from "@pebble-solutions/pebble-auth-client"

try {
    const authToken = await auth("---A_valid_token---")
    
    console.log(authToken)
    console.log(authToken.getUser())
    console.log(authToken.getAuthenticatedLicence())
}
catch (e) {
    console.error(e.message)
}
```

### Authenticate with HTTP Authorization header

This might work only if an Authorization header has been sent in the current 
client request. Authorization header must start with _Bearer_ string followed by
a valid JWT.

```TypeScript
import {authFromHttpHeaders} from "@pebble-solutions/pebble-auth-client"

try {
    const authToken = await authFromHttpHeaders()
    
    console.log(authToken)
    console.log(authToken.getUser())
    console.log(authToken.getAuthenticatedLicence())
}
catch (e) {
    console.error(e.message)
}
```