import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const ConnectedCardIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#242424"
      d="M18 11.2a4.203 4.203 0 0 1-5.683 3.93c-.223-.085-.265-.37-.11-.552A5.184 5.184 0 0 0 13.45 11.2a5.187 5.187 0 0 0-1.24-3.378c-.156-.181-.115-.468.109-.553A4.203 4.203 0 0 1 18 11.2Z"
    />
    <Path
      fill="#242424"
      d="M12.4 11.2a4.163 4.163 0 0 1-1.4 3.122A4.151 4.151 0 0 1 8.2 15.4 4.203 4.203 0 0 1 4 11.2C4 8.883 5.883 7 8.2 7c1.078 0 2.058.406 2.8 1.078a4.163 4.163 0 0 1 1.4 3.122Z"
    />
  </Svg>
);
