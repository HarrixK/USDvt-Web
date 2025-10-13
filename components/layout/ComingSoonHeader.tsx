import { Button } from "../ui/button";
import { Content, Section } from "./Section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import USDvtIcon from "../icons/USDvtIcon";

export default function ComingSoonHeader() {

  return (
    <Section className="bg-white sticky top-0 w-[100vw] z-[9999]">
      <Content className="flex flex-wrap items-center sm:justify-between py-4 gap-4">
        <Link href="/" className="flex flex-nowrap gap-3 items-center justify-center text-2xl hover:opacity-80 transition-opacity me-auto sm:me-0">
          <USDvtIcon />
        </Link>

        <div className={cn("flex md:hidden")}>
          <Link href="/terms-and-conditions-usdvt">
            <Button variant="outline" size="lg" className="text-black cursor-pointer bg-[#F2F2F2] rounded-btn">Learn about USDvt</Button>
          </Link>
        </div>

        <div className={cn("hidden md:flex")}>
          <Link href="/terms-and-conditions-usdvt">
            <Button variant="outline" size="lg" className="text-black cursor-pointer bg-[#F2F2F2] rounded-btn">Learn about USDvt</Button>
          </Link>
        </div>
      </Content>
    </Section>
  );
}