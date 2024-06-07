# NextJS 14 and LaunchDarkly Template 

This template is a NextJS 14 template configured to resolve both Client-Side feature flags using the React SDK as well as Server-Side Feature flags in API Routes and React Server components. 

You can find examples of both of these in the `/app/components` directory

- Client-Side Component - `/app/components/helloLDClient.tsx`
- Server-Side Component - `/app/components/helloLDRSC.tsx`
  
This template bootstraps the flag data to client-side using the LaunchDarkly Node SDK to ensure better performance and all flags available at render time. 

Additional examples are included for setting server cookies for LaunchDarkly contexts, and reading them in server-side connections, allowing feature targeting use cases. This example is in `/server/helpers/getServerContext.ts`

**Note:** When using client-side functionality, ensure you are using `'use client'` in your client components in order to evaluate feature flags successfully
