import { IconProps } from "@/types/common";

const ClockStatusIcon = (props: IconProps) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9 2.25C5.27344 2.25 2.25 5.27344 2.25 9C2.25 12.7266 5.27344 15.75 9 15.75C12.7266 15.75 15.75 12.7266 15.75 9C15.75 5.27344 12.7266 2.25 9 2.25Z" stroke="#A3ACB9" strokeWidth="1.125" strokeMiterlimit="10"/>
            <path d="M9 4.5V9.5625H12.375" stroke="#A3ACB9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default ClockStatusIcon; 