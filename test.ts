import { createApp, loadAppWithData } from './createApp';
import { list } from 'solid-bashlib';
import { getPodRoot } from 'solid-bashlib/dist/utils/util';
import { getAuthenticatedFetch } from './buildAuthenticatedFetch';

async function main() {
  const app = await createApp();
  await app.start();

  // Create a contacts resource in the Pod root
  await loadAppWithData();
  
  const authFetch = await getAuthenticatedFetch();

  // Get the root of the Pod (this assumes only one root - not always true)
  const root = await getPodRoot("http://localhost:3002/example/profile/card#me", authFetch);

  console.log('the root is', root)

  const contains = await list(root!, { fetch: authFetch, all: true, full: true, verbose: true });

  // Contains does not show that http://localhost:3002/example/contacts exists
  console.log('contains', contains)

  console.log(`Yet it does! We can fetch the triples [${
    await (await authFetch("http://localhost:3002/example/contacts")).text()
  }]`)

  await app.stop();
}

main();
