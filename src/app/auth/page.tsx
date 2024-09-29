"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupLogin() {
  const session = useSession();
  const user = session.data?.user;
  const router = useRouter();
  if (user) {
    router.push("/");
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <main className=" flex items-center justify-center p-4 border w-[60%] min-h-[60%] rounded-lg md:w-[40%]">
        <div className="w-full max-w-md space-y-8 ">
          <div className="text-center">
            <h1 className="md:text-4xl text-lg font-bold  tracking-tight ">
              Welcome to 100x<span className="text-blue-primary">Prep</span>
            </h1>
            <p className="text-sm md:text-base mt-2 text-mute text-gray-600">
              Sign in with your preferred account to get started.
            </p>
          </div>
          <div className="space-y-4">
            <Button
              onClick={async () => {
                signIn("google");
              }}
              className="w-full text-sm md:text-xl hover:bg-blue-700   rounded-lg h-16 text-white flex justify-center items-center bg-blue-primary border transition-colors"
            >
              <Image
                src="assets/icons/google.svg"
                alt="Google logo"
                width={20}
                height={20}
                className="mr-2"
              />
              <p className=""> Continue with Google</p>
            </Button>
            <Button className="w-full text-sm md:text-xl  rounded-lg h-16 bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <Image
                src="assets/icons/github.svg"
                alt="GitHub logo"
                width={20}
                height={20}
                className="mr-2"
              />
              Continue with GitHub
            </Button>
          </div>
          <p className="text-xs text-center text-gray-500">
            We only use your account for authentication purposes. Your data is
            safe with us.
          </p>
        </div>
      </main>
    </div>
  );
}
