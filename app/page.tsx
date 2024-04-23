import Image from "next/image";

export default function Home() {
  return (
    <div className="grid h-screen">
      <div className=" grid text-center justify-center items-center">
        <div className="space-y-8">
          <h1 className="text-3xl text-white font-bold font-audimat">
            Hello From LaunchDarkly!
          </h1>
          <p className="text-4xl font-audimat ldgradient pb-8 w-3/4 mx-auto">
            This is a Next.js 14 template with LaunchDarkly
          </p>
        </div>
      </div>
    </div>
  );
}
