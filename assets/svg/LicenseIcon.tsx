import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const LicenseIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#242424"
      d="M17.39 6.829v2.567c0 1.13-.834 2.068-1.926 2.223-.175.025-.32-.121-.32-.299v-.16a4.334 4.334 0 0 0-4.331-4.331h-.16c-.178 0-.324-.145-.299-.32a2.25 2.25 0 0 1 2.223-1.926h2.567a2.244 2.244 0 0 1 2.246 2.246Z"
    />
    <Path
      fill="#242424"
      d="M10.813 7.791H7.765A3.21 3.21 0 0 0 4.557 11v3.208a3.21 3.21 0 0 0 3.208 3.208h3.208a3.21 3.21 0 0 0 3.208-3.208V11.16a3.368 3.368 0 0 0-3.368-3.369Z"
    />
  </Svg>
);
