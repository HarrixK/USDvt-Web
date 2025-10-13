import { Content, Section } from "../layout/Section";
import { Props } from "@/types/common";
import { cn } from "@/lib/utils";
import Image from "next/image";

type UseCaseProps = Props & {
    imgUrl: string;
    title: string;
    subtext: string | React.ReactNode;
};

const UseCaseInfo = (props: UseCaseProps) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-between items-start gap-6",
                props.className
            )}
        >
            <div className="min-h-56 relative bg-white w-full">
                <Image src={props.imgUrl} alt={props.title} fill className="object-cover" loading="lazy" />
            </div>
            <div className=" flex flex-col justify-start  items-start gap-2">
                <h5 className="text-loud text-2xl font-medium m-0">{props.title}</h5>
                <p className="text-muted text-lg m-0">{props.subtext}</p>
            </div>
        </div>
    );
};

const UseCaseSection = () => {
    return (
        <Section className="bg-paper">
            <Content>
                <div className="py-12 sm:py-36">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-[0.2fr_1fr] gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6">
                        <h6 className="text-sm sm:text-xl text-normal  self-end uppercase">
                            use case
                        </h6>
                        <div>
                            <h2 className="text-3xl sm:text-5xl text-loud font-medium">
                                Built to <span className="text-primary">integrate</span> with your own infrastructure
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 mt-10 sm:mt-20">
                        <UseCaseInfo
                            title={"Custodians & banks"}
                            imgUrl={"/images/custodians-banks.webp"}
                            subtext={
                                <>
                                    Provide clients with tokenized USD in full compliance with regulations
                                </>
                            }
                        />
                        <UseCaseInfo
                            title={"Payment platforms"}
                            imgUrl={"/images/payment-platforms.webp"}
                            subtext={
                                <>
                                    Speed up international transactions and settlements for smoother cross-border payments
                                </>
                            }
                        />
                        <UseCaseInfo
                            title={"Corporate treasury"}
                            imgUrl={"/images/corporate-treasury.webp"}
                            subtext={
                                <>
                                    Manage on-chain liquidity with clear audit trails and quick speed
                                </>
                            }
                        />

                    </div>
                </div>
            </Content>
        </Section>
    );
};

export default UseCaseSection;
