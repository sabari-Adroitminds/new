import { IIconProps } from "@/types/interfaces";
import * as React from "react";
const IconSearch:React.FC<IIconProps> = (props) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10.3333 10.3333L15 15M6.44444 11.8889C3.43756 11.8889 1 9.45133 1 6.44444C1 3.43756 3.43756 1 6.44444 1C9.45133 1 11.8889 3.43756 11.8889 6.44444C11.8889 9.45133 9.45133 11.8889 6.44444 11.8889Z"
            stroke="#683C86"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default IconSearch;
