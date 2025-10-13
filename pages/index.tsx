import NewHome from "./new-home";
import { generateMetaTags, metaConfigs } from "@/lib/meta";

export default function Home() {
  return (
    <>
      {generateMetaTags({
        ...metaConfigs.home,
        canonicalUrl: "https://usdvt.com"
      })}
      <NewHome></NewHome>
    </>
  );
}