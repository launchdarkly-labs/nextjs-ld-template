"use client";

import { setCookie } from "cookies-next";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import { useEffect } from "react";

export default function HelloClient() {

  const { clientSideFlag } = useFlags();

  const client = useLDClient();

// Cookies can only be set from within middleware or a client component. We set our LaunchDarkly context cookie here so it's avialable in our server components. You would set this during an authentication action normally. 

  useEffect(() => {
    async function getLDContext() {
      const context: any = await client?.getContext();
      return context;
    }

    getLDContext().then((ldcontext) => {
      setCookie("ldcontext", ldcontext);
    });
  }, [client]);

  return (
    <div className="border-2 border-white/20  p-4 ">
      <p className="ldgradient text-xl">
        {clientSideFlag
          ? "This flag is evaluating True running Client-Side JavaScript"
          : "This flag is evaluating False running Client-Side JavaScript"}
      </p>
    </div>
  );
}
