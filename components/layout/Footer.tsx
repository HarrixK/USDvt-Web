import Facebook from "../icons/Facebook";
import Linkedin from "../icons/Linkedin";
import Logo from "../icons/Logo";
import Twitter from "../icons/Twitter";
import XIcon from "../icons/XIcon";
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
      <label className="text-sm font-normal mb-4 text-disabled uppercase tracking-wider">
        {title}
      </label>
      <ul className="space-y-2 text-base font-normal">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="hover:underline">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <Section className="bg-primary">
      <footer className="py-12 sm:py-20">
        <Content>
          <div className="flex flex-col sm:flex-row items-stretch justify-between text-white gap-0 sm:gap-8">
            <div className="flex flex-col justify-between">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Logo className="text-white" />
                <span className="text-white font-semibold text-2xl">USDvt</span>
              </Link>

              <div className="flex gap-4 mt-6">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <XIcon className="text-white" />
                </a>

                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="text-white" />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="text-white" />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="text-white" />
                </a>
              </div>
            </div>
            <hr className="flex sm:hidden my-8 border-separator" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16">
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

          <hr className="my-8 border-separator" />

          <div className="flex flex-col sm:flex-row items-center justify-around sm:justify-between mt-6 text-base font-medium text-white gap-6 sm:gap-8">
            <div>© 2025 USDvt, All Rights Reserved</div>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-1.5 font-normal">
              <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
              <span className="text-separator px-4">|</span>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              <span className="text-separator px-4">|</span>
              <Link href="/terms-and-conditions#cookies" className="hover:underline">Cookie Policy</Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-around sm:justify-between mt-6 text-base font-medium text-white gap-6 sm:gap-8">
            <p id="noFees">* no fees preview text goes here</p>
          </div>
        </Content>
      </footer>
    </Section>
  );
}
