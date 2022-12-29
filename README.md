## Install

```
npm ci
```

## Run demo

```
npm run demo
```

## Result

Running the script gives the result

```bash

> bashlib-list-error-minimal-repro@1.0.0 demo
> ts-node test.ts

oidc-provider WARNING: Unsupported Node.js runtime version. Use ^12.19.0, ^14.15.0, or ^16.13.0
2022-12-29T04:51:17.166Z [UnsecureWebSocketsProtocol] {Primary} warn: The chosen configuration includes Solid WebSockets API 0.1, which is unauthenticated.
2022-12-29T04:51:17.166Z [UnsecureWebSocketsProtocol] {Primary} warn: This component will be removed from default configurations in future versions.
2022-12-29T04:51:17.181Z [ContainerInitializer] {Primary} info: Initializing container http://localhost:3002/
2022-12-29T04:51:17.198Z [ContainerInitializer] {Primary} info: Initialized container http://localhost:3002/ with 3 resources.
2022-12-29T04:51:17.200Z [SeededPodInitializer] {Primary} info: Initializing pod example
2022-12-29T04:51:17.289Z [GeneratedPodManager] {Primary} info: Creating pod http://localhost:3002/example/
2022-12-29T04:51:17.324Z [GeneratedPodManager] {Primary} info: Added 8 resources to http://localhost:3002/example/
2022-12-29T04:51:17.329Z [SeededPodInitializer] {Primary} info: Initialized seeded pod and account for "example".
2022-12-29T04:51:17.329Z [SeededPodInitializer] {Primary} info: Initialized 1 seeded pods.
2022-12-29T04:51:17.333Z [BaseHttpServerFactory] {Primary} info: Listening to server at http://localhost:3002/
2022-12-29T04:51:17.341Z [BaseHttpServerFactory] {Primary} info: Received POST request for /idp/credentials/
2022-12-29T04:51:17.457Z [BaseHttpServerFactory] {Primary} info: Received POST request for /.oidc/token
2022-12-29T04:51:17.496Z [BaseHttpServerFactory] {Primary} info: Received PUT request for /example/contacts
2022-12-29T04:51:17.511Z [BaseHttpServerFactory] {Primary} info: Received GET request for /example/profile/card
2022-12-29T04:51:17.529Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/profile/card.acl
2022-12-29T04:51:17.552Z [BaseHttpServerFactory] {Primary} info: Received GET request for /.well-known/openid-configuration
2022-12-29T04:51:17.567Z [BaseHttpServerFactory] {Primary} info: Received GET request for /.oidc/jwks
2022-12-29T04:51:17.579Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.588Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
2022-12-29T04:51:17.590Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
2022-12-29T04:51:17.599Z [BaseHttpServerFactory] {Primary} info: Received POST request for /idp/credentials/
2022-12-29T04:51:17.690Z [BaseHttpServerFactory] {Primary} info: Received POST request for /.oidc/token
2022-12-29T04:51:17.711Z [BaseHttpServerFactory] {Primary} info: Received HEAD request for /example/profile/card
2022-12-29T04:51:17.718Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.723Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/profile/card.acl
2022-12-29T04:51:17.738Z [BaseHttpServerFactory] {Primary} info: Received GET request for /example/profile/card
2022-12-29T04:51:17.745Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/profile/card.acl
2022-12-29T04:51:17.757Z [BaseHttpServerFactory] {Primary} info: Received HEAD request for /example/profile/
2022-12-29T04:51:17.762Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.765Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
2022-12-29T04:51:17.778Z [BaseHttpServerFactory] {Primary} info: Received GET request for /example/profile/
2022-12-29T04:51:17.788Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
2022-12-29T04:51:17.792Z [PermissionBasedAuthorizer] {Primary} warn: Unauthenticated agent has no read permissions
2022-12-29T04:51:17.802Z [BaseHttpServerFactory] {Primary} info: Received HEAD request for /example/
2022-12-29T04:51:17.809Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.811Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
the root is http://localhost:3002/example/
2022-12-29T04:51:17.821Z [BaseHttpServerFactory] {Primary} info: Received GET request for /example/
2022-12-29T04:51:17.827Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.830Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
2022-12-29T04:51:17.846Z [BaseHttpServerFactory] {Primary} info: Received HEAD request for /example/
2022-12-29T04:51:17.854Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.857Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
2022-12-29T04:51:17.867Z [BaseHttpServerFactory] {Primary} info: Received HEAD request for /example/.meta
2022-12-29T04:51:17.873Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.875Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
2022-12-29T04:51:17.883Z [BaseHttpServerFactory] {Primary} info: Received HEAD request for /example/.acl
2022-12-29T04:51:17.888Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.892Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
2022-12-29T04:51:17.905Z [BaseHttpServerFactory] {Primary} info: Received HEAD request for /example/.acl
2022-12-29T04:51:17.912Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.918Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
2022-12-29T04:51:17.929Z [BaseHttpServerFactory] {Primary} info: Received HEAD request for /example/.meta
2022-12-29T04:51:17.936Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.938Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
contains [
  {
    url: 'http://localhost:3002/example/.acl',
    relativePath: '.acl',
    isDir: false,
    modified: 2022-12-29T04:51:17.000Z,
    types: [ 'http://www.w3.org/ns/ldp#Resource' ]
  },
  {
    url: 'http://localhost:3002/example/.meta',
    relativePath: '.meta',
    isDir: false,
    modified: undefined,
    types: undefined
  }
]
2022-12-29T04:51:17.948Z [BaseHttpServerFactory] {Primary} info: Received GET request for /example/contacts
2022-12-29T04:51:17.955Z [DPoPWebIdExtractor] {Primary} info: Verified WebID via DPoP-bound access token: http://localhost:3002/example/profile/card#me
2022-12-29T04:51:17.959Z [WebAclReader] {Primary} info: Found applicable ACL document http://localhost:3002/example/.acl
Yet it does! We can fetch the triples [<http://localhost:3002/example/contacts> <https://example.com/ns/3/authoredWith> <http://localhost:3001/jarvis.jsonld#App>.
]
```