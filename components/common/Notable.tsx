import { Props } from "@/types/common";
import { FC } from "react";

const Notable: FC<{text: string} & Props> = (props) => {
    return <span className="text-primary">{props.text}</span>
}
export default Notable;