import { IconProps } from "@/types/common";

const ChevronDown = (props: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    className={props.className}
    {...props}
  >
    <path
      d="M19 9l-7 7-7-7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronDown; 