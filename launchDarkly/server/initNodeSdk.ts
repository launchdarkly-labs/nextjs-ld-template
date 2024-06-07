export const initNodeSdk = async () => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const sdk = await import('@launchdarkly/node-server-sdk');
    const ldNodeClient = sdk.init(process.env.LAUNCHDARKLY_SDK_KEY ?? '');

    // HACK: save this globally so we can access it from the app
    global.ldNodeClient = ldNodeClient;

    try {
      await ldNodeClient.waitForInitialization({ timeout: 5 });
    } catch (e) {
      // Log and report errors here.
      // A non-initialized ldClient will be returned which
      // will use defaults for evaluation.
      console.log(`LaunchDarkly NodeClient init error: ${e}`);
    }
  }
};
