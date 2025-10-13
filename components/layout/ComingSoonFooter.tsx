import { Content, Section } from "./Section";
import Link from "next/link";

export default function ComingSoonFooter() {
  return (
    <Section className="bg-white">
      <footer className="py-12 sm:py-10">
        <Content>

          <hr className="my-8 border-black border-gray-300" />

          <div className="flex flex-col sm:flex-row items-center justify-around sm:justify-between mt-6 text-base font-medium text-[#0D0D1280] gap-6 sm:gap-8">
            <div>© 2025 USDvt, All Rights Reserved</div>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-1.5 font-light">
              <Link href="/terms-and-conditions-usdvt" className="hover:underline font-light">Terms & Conditions</Link>
            </div>
          </div>
        </Content>
      </footer>
    </Section>
  );
}
