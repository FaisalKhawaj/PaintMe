import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowLeftIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m11.32 17.164 1.274-1.266-2.086-2.093a32.313 32.313 0 0 0-1.516-1.422l.719.031c.24.005.474.008.703.008h6.93v-1.844h-6.93c-.23 0-.463.005-.703.016-.24.005-.477.013-.711.023.26-.234.518-.469.773-.703.256-.24.5-.476.735-.71l2.094-2.095-1.282-1.273L5.656 11.5l5.664 5.664Z"
    />
  </Svg>
);
