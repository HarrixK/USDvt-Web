
import { ArrowRight } from "lucide-react";
import { Content, Section } from "../layout/Section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Props } from "@/types/common";
import { FC } from "react";

type GetUSDVTSectionProps = {
    title: React.ReactNode
    desc: string
} & Props

const GetUSDVTSection: FC<GetUSDVTSectionProps> = (props: GetUSDVTSectionProps) => {
    return (
        <Section className="bg-bunker">
            <Content>
                <div className="py-12 sm:py-36">
                    <div className="flex flex-col sm:flex-row items-stretch justify-start gap-4 sm:gap-16 w-full mb-10 sm:mb-20">
                        <div className="self-start">
                            <h6 className="text-sm sm:text-xl text-normal m-0 text-nowrap mb-5">GET USDvt</h6>
                            <h1 className="text-4xl sm:text-6xl mb-4 sm:mb-6 text-white font-medium">
                                {props.title}
                            </h1>
                            <h6 className="text-base sm:text-xl text-disabled font-normal">
                              {props.desc}
                            </h6>
                        </div>
                        <div className="flex-1 content-end text-right mt-2 sm:mt-0">
                            <Button className="w-full sm:w-auto" size={"lg"}>
                                GET USDvt <ArrowRight />
                            </Button>
                        </div>
                    </div>
                    <Image
                        src={"/images/your-role-bg2.webp"}
                        width={1280}
                        height={400}
                        alt=""
                        className="hidden md:block"
                        loading="lazy"
                    />
                    <div className="grid md:hidden grid-cols-3 h-[360px]">
                        <div className="relative">
                            <Image src={'/images/usdvt-sent.webp'} alt="USDvt Sent" loading="lazy" fill className="object-cover" />
                        </div>
                        <div className="relative">
                            <Image src={'/images/trade-confirmed.webp'} alt="Trading Confimed" loading="lazy" fill className="object-cover" />
                        </div>
                        <div className="relative">
                            <Image src={'/images/eating-out.webp'} alt="Eating Out in a Cafe" loading="lazy" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </Content>
        </Section>
    );
};

export default GetUSDVTSection;
