import { Props } from "@/types/common";
import Header from "./Header";
import FooterWhite from "./FooterWhite";

const Page = (props: Props) => {
  return (
    <>
      <Header />
        <main className="w-full h-full">{props.children}</main>
      <FooterWhite />
    </>
  );
};

export default Page;
