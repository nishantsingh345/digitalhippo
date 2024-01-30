import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    name: "instant Delivery",
    icon: ArrowDownToLine,
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace of high-qualtiy <span className="text-blue-700">digital assets</span> .
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground ">
            Welcome to digitalHippo . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            quia ipsam repellat in illum fuga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/product" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our qualtiy promise &#x2192;</Button>
          </div>
        </div>
        {/* Todo: list product */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-300 bg-gray-100">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 gap-x-8 lg:gap-y-0"></div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
