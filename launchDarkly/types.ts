import type { LDClient as NodeClient } from '@launchdarkly/node-server-sdk';

export type { LDClient as NodeClient } from '@launchdarkly/node-server-sdk';

declare global {
  module globalThis {
    var nodeClient: NodeClient;
  }
}
