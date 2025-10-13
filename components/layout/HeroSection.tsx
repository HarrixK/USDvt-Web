import Image from "next/image";
import { Button } from "../ui/button";
import Logo from "../icons/Logo";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white mx-auto max-w-screen-2xl">
        {/* Left Side */}
        <div className="flex flex-col justify-center max-w-screen-md w-full h-[810px]  gap-40  ">
          <h1 className="text-6xl font-semibold leading-tight  ">
            A <span className="text-blue">regulated</span> digital
            <br className="hidden sm:block"/>
            <div className="flex items-center gap-2">
              dollar{" "}
              <Image
                src="/images/dollors.webp"
                alt="hero"
                width={132}
                height={56}
                priority
              />
              for better
            </div>
            internet economy
          </h1>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <Button
              variant="outline"
              size="lg"
              className="text-sm rounded-none border-0 shadow bg-black text-white mt-10"
            >
              GET USDvt
              <ArrowRight />
            </Button>

            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              Stable, compliant, and always on—USDvt
              <br />
              is a dollar-backed stablecoin for global
              <br />
              payments and digital finance.
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full max-w-[680px] h-[810px] flex justify-center items-center">
          <Image
            src="/images/Frames.webp"
            alt="hero"
            fill
            className="object-contain"
            loading="lazy"
          />
          <div className=" absolute  -left-20 bg-white p-4 flex item  justify-between shadow-xl border rounded-2xl w-[365px]">
            <Logo className="h-12 w-12" />

            <div className="flex flex-col justify-center items-start">
              <h1 className="text-xl text-muted font-medium">Monthly Wages</h1>
              <p className="text-sm text-subdued">Payment processed</p>
            </div>

            <h1 className="text-success text-lg font-medium items-center mt-2">
              +2500 USDvt
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
