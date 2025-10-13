import Logo from "../icons/Logo";
import { Content, Section } from "./Section";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

type NavGroupFooterProps = {
  title: string;
  links: NavLink[];
};

const NavGroupFooter: React.FC<NavGroupFooterProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <label className="text-sm font-normal mb-4 text-black uppercase tracking-wider">
        {title}
      </label>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="hover:underline font-light">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function FooterWhite() {
  return (
    <Section className="bg-white">
      <footer className="py-12 sm:py-20">
        <Content>
          <div className="flex flex-col sm:flex-row items-stretch justify-between text-black gap-0 sm:gap-8">
            <div className="flex flex-col justify-between">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Logo className="text-black" />
                <span className="text-black font-semibold text-2xl">USDvt</span>
              </Link>
            </div>
            <hr className="flex sm:hidden my-8 border-separator" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16">
              <NavGroupFooter
                title="Terms & Policies"
                links={[
                  { label: "Terms of Service", href: "/terms-and-conditions" },
                  { label: "Privacy Policy", href: "/privacy" },
                ]}
              />
              <NavGroupFooter
                title="Solutions"
                links={[
                  { label: "Retail", href: "/retail" },
                  { label: "Enterprise", href: "/#" },
                  { label: "Institutions", href: "/institution" },
                ]}
              />
              <NavGroupFooter
                title="Company"
                links={[
                  { label: "About", href: "/about" },
                  { label: "Partners", href: "/partner" },
                  { label: "Transparency", href: "/#" },
                  { label: "Blog", href: "/blog" },
                ]}
              />
            </div>
          </div>

          <hr className="my-8 border-black border-gray-300" />

          <div className="flex flex-col sm:flex-row items-center justify-around sm:justify-between mt-6 text-base font-medium text-black gap-6 sm:gap-8">
            <div>© 2025 USDvt, All Rights Reserved</div>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-1.5 font-light">
              <Link href="/terms-and-conditions" className="hover:underline font-light">Terms & Conditions</Link>
              <span className="px-4 text-gray-300">|</span>
              <Link href="/privacy" className="hover:underline font-light">Privacy Policy</Link>
              <span className="text-gray-300 px-4">|</span>
              <Link href="/terms-and-conditions#cookies" className="hover:underline font-light">Cookie Policy</Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-around sm:justify-between mt-20 gap-6 sm:gap-8">
            <p id="noFees" className="font-light text-xs">* no fees preview text goes here</p>
          </div>
        </Content>
      </footer>
    </Section>
  );
}
