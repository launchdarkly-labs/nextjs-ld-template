import getServerContext from "@/launchDarkly/server/helpers/getServerContext";

export default async function HelloRSC() {
  // Helper function to get LaunchDarkly context data from server cookie
  const ldContext = await getServerContext();

  // Using the global LaunchDarkly client in Node to call a variation
  const serverFlag = await ldNodeClient.variation(
    "serverSideFlag",
    ldContext,
    false
  );

  return (
    <div className="border-2 border-white/20 p-4">
      <p className="text-xl ldgradient">
        {serverFlag
          ? "This flag is evaluating True in a React Server Component"
          : "This flag is evaluating False in a React Server Component"}
      </p>
    </div>
  );
}
