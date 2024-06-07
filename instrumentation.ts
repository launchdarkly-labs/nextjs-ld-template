import { initNodeSdk } from '@/launchDarkly/server';

export async function register() {
  await initNodeSdk();
}
