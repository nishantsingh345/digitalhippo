import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    name: "instant Delivery",
    icon: ArrowDownToLine,
    description: "get your assets on your email in second download them right away",
  },
  {
    name: "Guranted Quality",
    icon: CheckCircle,
    description:
      "every assets on your platform verified by my team i ensure  its our highest quality product . if you are not happy 30 days replacement guranntee with this project",
  },
  {
    name: "For the planet",
    icon: Leaf,
    description:
      "we have pladge 1% of  sales to the preservetion and restoration of the natural enviornment .",
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
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base text-gray-900 font-medium">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
