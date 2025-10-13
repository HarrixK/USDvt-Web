import { useState } from "react";
import Logo from "../icons/Logo";
import { Button } from "../ui/button";
import { Content, Section } from "./Section";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/about-us.module.css';
import CafeUsageIn from "../icons/CafeUsageIn";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <Section className="bg-white sticky top-0 w-[100vw] z-[9999]">
      <Content className="flex flex-wrap items-center sm:justify-between py-4 gap-4">
        <Link href="/" className="flex flex-nowrap gap-3 items-center justify-center text-2xl hover:opacity-80 transition-opacity me-auto sm:me-0">
          <Logo className="text-[#2A18F2]" />
          <span className="text-loud font-semibold">USDvt</span>
        </Link>

        <div className={cn("flex md:hidden")}>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="cursor-pointer bg-[#F2F2F2] rounded-btn">GET USDvt</Button>
          </Link>
        </div>

        <Button 
          onClick={() => setMenuOpen(!menuOpen)} 
          variant={"ghost"} 
          size={"icon"} 
          className="md:hidden [&_svg:not([class*='size-'])]:size-6"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        <ul className={cn(
          "hidden md:flex md:space-x-6 sm:items-center sm:justify-between text-sm font-medium text-muted sm:ps-0 ps-5",
          { "flex space-y-6 justify-center absolute top-[100%] bg-gallery flex-col left-0 right-0 py-5 transition-all shadow z-10": menuOpen }
        )}>
          <li>
            <button 
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              onMouseEnter={() => !menuOpen && setSolutionsOpen(true)}
              onMouseLeave={() => !menuOpen && setSolutionsOpen(false)}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              Solutions
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", { "rotate-180": solutionsOpen })} />
            </button>
            {solutionsOpen && (
              <ul 
                onMouseEnter={() => !menuOpen && setSolutionsOpen(true)}
                onMouseLeave={() => !menuOpen && setSolutionsOpen(false)}
                className={cn(
                  "z-40 absolute w-[100vw] left-0 rounded-md text-sm transition-opacity duration-300 opacity-0", styles.fadeIn,
                  { "relative w-full mt-0 shadow-none rounded-none": menuOpen }
                )}
              >
                <div className="bg-white mt-5 grid grid-cols-3 gap-8 px-10 py-7 max-[640px]:hidden">
                  <li className="p-4 bg-[#FAFAFA] rounded-lg z-40 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-white hover:border transition-all duration-300">
                    <div className="relative">
                      <Link href="/retail">
                        <Image src="/images/For-Retail.webp" width={500} height={100} alt="Coffee Shop" className="w-full h-32 object-cover rounded-lg" priority />
                      </Link>
                      <div className="bg-white rounded-[9px] p-2 absolute right-2 top-16 flex items-center justify-center space-x-4">
                        <span><CafeUsageIn /></span>
                        <div className="flex flex-col items-start">
                          <p className="font-medium">Coffee Shop</p>
                          <p className="font-light text-xs text-[#808898]">Payment processed</p>
                        </div>
                        <span className="text-[#39BC4F]">+0.91 USDvt</span>
                      </div>
                    </div>
                    <div className="p-2">
                      <Link href="/retail" className="text-black font-medium">For Retail</Link>
                      <p className="text-muted-foreground text-sm mt-1">Take control of your digital dollars anytime and anywhere</p>
                    </div>
                  </li>
                  <li className="p-4 bg-[#FAFAFA] rounded-lg z-40 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-white hover:border transition-all duration-300">
                    <Link href="/institution">
                      <Image src="/images/For-Institution.webp" width={500} height={100} alt="Institutions" className="w-full h-32 object-cover rounded-lg" priority />
                    </Link>
                    <div className="p-2">
                      <Link href="/institution" className="text-black font-medium">For Institutions</Link>
                      <p className="text-muted-foreground text-sm mt-1">Power institutions in the future of stable digital finance</p>
                    </div>
                  </li>
                  <li className="p-4 bg-[#FAFAFA] rounded-lg z-40 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-white hover:border transition-all duration-300">
                    <Link href="/business">
                      <Image src="/images/For-Business.webp" width={500} height={100} alt="Business" className="w-full h-32 object-cover rounded-lg" priority />
                    </Link>
                    <div className="p-2">
                      <Link href="/business" className="text-black font-medium">For Business</Link>
                      <p className="text-muted-foreground text-sm mt-1">Power your business with faster and cheaper payments</p>
                    </div>
                  </li>
                </div>
                <div className="block sm:hidden">
                  <li>
                  <Link href="/retail" className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                    Retail
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/institution" className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                    Institutions
                  </Link>
                </li>
                </div>
              </ul>
            )}
          </li>
          <li><Link href="/partner" className="hover:text-primary transition-colors">Partners</Link></li>
          <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          <li className="md:hidden">
            <div className={cn("hidden md:flex bg-gallery", { "flex": menuOpen })}>
              <Link href="/contact">
                <Button variant="outline" size="lg">GET USDvt</Button>
              </Link>
            </div>
          </li>
        </ul>

        <div className={cn("hidden md:flex")}>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="cursor-pointer bg-[#F2F2F2] rounded-btn">GET USDvt</Button>
          </Link>
        </div>
      </Content>
    </Section>
  );
}