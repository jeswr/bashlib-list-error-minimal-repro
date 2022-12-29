import * as path from 'path';
import {
  fromRdfJsDataset, saveSolidDatasetAt
} from '@inrupt/solid-client';
import { AppRunner, resolveModulePath } from '@solid/community-server';
import { DataFactory as DF, Store } from 'n3';
import { getAuthenticatedFetch } from './buildAuthenticatedFetch';

export function createApp() {
  return new AppRunner().create(
    {
      mainModulePath: resolveModulePath(''),
      typeChecking: false,
    },
    resolveModulePath('config/default.json'),
    {},
    {
      port: 3_002,
      seededPodConfigJson: path.join(__dirname, 'configs', 'solid-css-seed.json'),
    },
  );
}

export async function loadAppWithData() {
  // Build authenticated fetch
  const authFetch = await getAuthenticatedFetch();

  const d = fromRdfJsDataset(
    new Store([
      DF.quad(
        DF.namedNode('http://localhost:3002/example/contacts'),
        DF.namedNode('https://example.com/ns/3/authoredWith'),
        DF.namedNode('http://localhost:3001/jarvis.jsonld#App')
      )
    ])
  );

  await saveSolidDatasetAt('http://localhost:3002/example/contacts', d, {
    fetch: authFetch,
  })
}
