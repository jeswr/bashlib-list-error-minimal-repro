import type { KeyPair } from '@inrupt/solid-client-authn-core';
import {
  buildAuthenticatedFetch, createDpopHeader,
  generateDpopKeyPair
} from '@inrupt/solid-client-authn-core';

import fetch from 'cross-fetch';
export const config = [{
  podName: 'example',
  email: 'hello@example.com',
  password: 'abc123',
}];

interface ISecretData {
  id: string;
  secret: string;
}

// From https://communitysolidserver.github.io/CommunitySolidServer/5.x/usage/client-credentials/
function getSecret(): Promise<ISecretData> {
  return fetch('http://localhost:3002/idp/credentials/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email: config[0].email, password: config[0].password, name: config[0].podName }),
  }).then(res => res.json());
}

interface ITokenData {
  accessToken: string;
  dpopKey: KeyPair;
}

// From https://communitysolidserver.github.io/CommunitySolidServer/5.x/usage/client-credentials/
async function refreshToken({ id, secret }: ISecretData): Promise<ITokenData> {
  const dpopKey = await generateDpopKeyPair();
  const authString = `${encodeURIComponent(id)}:${encodeURIComponent(secret)}`;
  const tokenUrl = 'http://localhost:3002/.oidc/token';
  const accessToken = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      // The header needs to be in base64 encoding.
      authorization: `Basic ${Buffer.from(authString).toString('base64')}`,
      'content-type': 'application/x-www-form-urlencoded',
      dpop: await createDpopHeader(tokenUrl, 'POST', dpopKey),
    },
    body: 'grant_type=client_credentials&scope=webid',
  })
    .then(res => res.json())
    .then(res => res.access_token);

  return { accessToken, dpopKey };
}

export async function getAuthenticatedFetch(): Promise<typeof globalThis.fetch> {

    // Generate secret
    const secret = await getSecret();

    // Get token
    const token = await refreshToken(secret);

    // Build authenticated fetch
    return await buildAuthenticatedFetch(<any>fetch, token.accessToken, { dpopKey: token.dpopKey });

}
