import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const HeartIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M14.992 4A4.364 4.364 0 0 0 11.5 5.754 4.364 4.364 0 0 0 8.008 4C5.593 4 3.635 5.966 3.635 8.397c0 .936.15 1.8.409 2.603 1.243 3.933 5.073 6.284 6.968 6.93.268.094.708.094.976 0 1.895-.646 5.726-2.997 6.968-6.93a8.4 8.4 0 0 0 .41-2.603c0-2.43-1.96-4.397-4.374-4.397Z"
      opacity={0.8}
    />
  </Svg>
);
