import { Props } from "@/types/common";
import { Card } from "../ui/card";
import PartnerLogo from "../icons/PartnerLogo";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Badge = (props: Props) => {
  return (
    <Card
      className={cn(
        "bg-white p-4 flex flex-col gap-2 shadow-xl border rounded-2xl",
        props.className
      )}
    >
      <Header />
      <Columns />
      <BadgeRow />
      <BadgeRow />
      <BadgeRow />
      <BadgeRow />
    </Card>
  );
};

const Header = () => (
  <div className="flex justify-start gap-2 items-start mb-2">
    <PartnerLogo className="bg-junglegreen h-full rounded-full" />
    <div className="flex flex-col justify-center items-start">
      <p className="text-base text-muted font-medium m-0">Partners Name</p>
      <p className="text-xs text-subdued m-0">Professional Audit Manager</p>
    </div>
  </div>
);

const Columns = () => (
  <div className="flex justify-between items-center border-b border-black pb-2 uppercase gap-6">
    <p className="text-xs font-medium text-subdued">Activity</p>
    <p className="text-xs font-medium text-subdued">Status</p>
  </div>
);

const BadgeRow = () => (
  <div className="flex justify-between items-center border-b border-mystic pb-2 gap-6">
    <p className="text-sm font-normal text-muted">Activity</p>
    <div className="flex items-center justify-center gap-2">
      <Check className="text-primary h-3.5 w-3.5" />
      <p className="text-sm font-medium text-primary">Reviewed</p>
    </div>
  </div>
);

export default Badge;