import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
export const CancelIcon = (props: any) => (
  <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={15.1665}
        y={6.5}
        width={2.59266}
        height={12.9633}
        rx={0.707088}
        transform="rotate(45 15.166 6.5)"
        fill="#242424"
      />
      <Rect
        x={17}
        y={15.6665}
        width={2.59266}
        height={12.9633}
        rx={0.707088}
        transform="rotate(135 17 15.666)"
        fill="#242424"
      />
    </Svg>
);
