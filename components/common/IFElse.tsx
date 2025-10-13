import { Props } from "@/types/common";
import React from "react";

type IFElseProps = {
    expression: boolean
} & Props
const IFElse = (props: IFElseProps) => {
    const [ifBlock, elseBlock] = React.Children.toArray(props.children);
    return (props.expression ? ifBlock : elseBlock)
}

export default IFElse;