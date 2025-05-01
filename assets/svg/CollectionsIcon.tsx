import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const CollectionIcon = (props: any) => (
  <Svg
    width={30}
    height={29}
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.76 12.688v13.895H9.603c-4.398 0-7.02-2.622-7.02-7.02v-6.875H13.76zM26.75 12.688v6.875c0 4.398-2.622 7.02-7.02 7.02h-4.157V12.688H26.75zM26.75 9.437v1.438H2.583V9.437c0-4.398 2.622-7.02 7.02-7.02H19.73c4.399 0 7.02 2.622 7.02 7.02z"
      fill={props.color}
    />
  </Svg>
);
