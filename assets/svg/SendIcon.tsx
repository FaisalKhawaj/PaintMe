import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const SendIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m15.007 3.336-7.65 2.542c-5.143 1.72-5.143 4.524 0 6.235l2.27.754.755 2.27c1.71 5.143 4.524 5.143 6.235 0l2.55-7.641c1.135-3.431-.728-5.304-4.16-4.16Z"
      opacity={0.8}
    />
  </Svg>
);
