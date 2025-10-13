import { IconProps } from "@/types/common";

const BaseIcon = (props: IconProps) => {
    return (
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M20.972 36.75C29.687 36.75 36.75 29.6975 36.75 21C36.75 12.3025 29.687 5.25 20.972 5.25C12.705 5.25 5.922 11.5973 5.25 19.677H26.1047V22.3247H5.25C5.92375 30.4028 12.705 36.75 20.972 36.75Z" fill="#0052FF"/>
        </svg>
    );
};

export default BaseIcon; 