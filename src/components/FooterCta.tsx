import { Sparkles } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const FooterCta = () => {
  return (
    <>
      <div className="py-12 md:py-24 lg:py-32 -mt-4 w-screen bg-blue-600 text-white">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Looking to excel in engineering?
              </h2>
              <p className="mx-auto max-w-[700px] text-lg sm:text-xl font-light">
                Join our free platform and learn alongside thousands of
                students!
              </p>
            </div>
            <Link href={"/course"}>
              <Button
                className="bg-white text-blue-600 flex gap-1 rounded-lg items-center hover:bg-black hover:text-white transition-colors"
                size="lg"
              >
                Get Started Now <Sparkles width={20} height={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCta;
