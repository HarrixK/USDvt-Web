import { Content, Section } from "../layout/Section";
import { Props } from "@/types/common";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

type UseCaseCardProps = Props & {
    imgUrl: string;
    title: string;
    subtext: string | React.ReactNode;
};

type UseCaseSectionProps = Props & {
    title: React.ReactNode
}

const UseCaseCard = (props: UseCaseCardProps) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-between items-start gap-6 border-b sm:border-0 border-loud pb-4" ,
                props.className
            )}
        >
            <div className="min-h-56 relative bg-white w-full">
                <Link href="/blog">
                    <Image src={props.imgUrl} alt={props.title} loading="lazy" fill className="object-cover" />
                </Link>
            </div>
            <div className=" flex flex-col justify-start  items-start gap-2">
                <h5 className="text-loud text-2xl font-medium m-0">{props.title}</h5>
                <p className="text-muted text-lg m-0">{props.subtext}</p>
            </div>
        </div>
    );
};

const UseCaseSectionRetail: FC<UseCaseSectionProps> = (props) => {
    return (
        <Section className="bg-paper">
            <Content>
                <div className="py-12 sm:py-15">
                    <div className="w-full grid md:gap-x-10 gap-y-2 md:gap-y-6">
                        <h6 className="text-sm sm:text-xl text-normal  self-end uppercase">
                            use case
                        </h6>
                        <div>
                            <h2 className="text-3xl sm:text-5xl text-loud font-medium">
                                {props.title}
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 mt-10 sm:mt-20 ">
                        <UseCaseCard
                            title={"Remittances"}
                            imgUrl={"/images/custodians-banks.webp"}
                            subtext={
                                <>
                                    Send money home instantly, with no fees or delays
                                </>
                            }
                        />
                        <UseCaseCard
                            title={"Everyday payments"}
                            imgUrl={"/images/payment-platforms.webp"}
                            subtext={
                                <>
                                    Use USDvt to pay rent, bills, or shop online.
                                </>
                            }
                        />
                        <UseCaseCard
                            title={"Freelance income"}
                            imgUrl={"/images/corporate-treasury.webp"}
                            subtext={
                                <>
                                    Get paid faster and keep more without bank fees
                                </>
                            }
                        />
                    </div>
                </div>
            </Content>
        </Section>
    );
};

export default UseCaseSectionRetail;
