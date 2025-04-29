import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const HomeIcon = (props: any) => (
  <Svg
    width={30}
    height={29}
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.94 29H7.06a6.239 6.239 0 01-6.24-6.239v-9.93c0-1.8.777-3.51 2.131-4.695l7.534-6.592a6.239 6.239 0 018.029-.159l8.346 6.742a6.239 6.239 0 012.32 4.854v9.78A6.239 6.239 0 0122.94 29zM11.29 16.826a.993.993 0 00-1.656 1.094c.775 1.174 2.252 2.672 4.195 3.138.998.24 2.097.2 3.227-.279 1.119-.473 2.213-1.35 3.264-2.698a.993.993 0 00-1.565-1.22c-.901 1.155-1.742 1.781-2.472 2.09a3.111 3.111 0 01-1.99.177c-1.27-.304-2.378-1.357-3.002-2.302z"
      fill={props.color}
    />
  </Svg>
);
