import * as React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
export const AddIcon = (props: any) => (
  <Svg
    width={30}
    height={29}
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G opacity={1} fill={props.color}>
      <Rect
        x={13.4165}
        y={2.91699}
        width={4.83333}
        height={24.1667}
        rx={1.20833}
      />
      <Rect
        x={27.9165}
        y={12.584}
        width={4.83333}
        height={24.1667}
        rx={1.20833}
        transform="rotate(90 27.916 12.584)"
      />
    </G>
  </Svg>
);
