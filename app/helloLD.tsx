'use client';

import { useFlags } from 'launchdarkly-react-client-sdk';

export default function HelloLD() {
  const { devTestFlag } = useFlags();

  return (
    <div>
      <p>{devTestFlag ? 'Hello from LD! Flag true' : 'Flag false'}</p>
    </div>
  );
}
