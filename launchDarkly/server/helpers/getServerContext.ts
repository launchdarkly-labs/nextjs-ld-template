import { getCookie } from "cookies-next";
import { LDContext } from "launchdarkly-node-server-sdk";
import { cookies } from "next/headers";

export default async function getServerContext() {

    let ldContext: LDContext;
    try {
        const clientContext: any = await getCookie("ldcontext", { cookies });

        console.log("Cookie found, using server context");
        const json = decodeURIComponent(clientContext);
        ldContext = JSON.parse(json);
    } catch {
        console.log("Cookie not available, using local context");

        ldContext = {
            kind: 'user',
            key: '1',
        };
    }
    return ldContext
}