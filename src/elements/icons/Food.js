import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgFood = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 32 32"
    {...props}>
    <Path
      stroke="#F7658B"
      strokeMiterlimit={10}
      strokeWidth={1.719}
      d="m4.524 17.244-1.719-3.009c-.43-.688-.172-1.633.516-1.977.688-.43 1.547-.172 1.977.516l2.493 4.384M15.355 16.556c0-2.493 2.063-4.556 4.556-4.556s4.556 2.063 4.556 4.556"
    />
    <Path
      stroke="#F3A8A2"
      strokeMiterlimit={10}
      strokeWidth={1.719}
      d="M19.911 17.158v11.604M24.639 17.158v11.604M29.28 23.003H17.075"
    />
    <Path
      stroke="#F7658B"
      strokeMiterlimit={10}
      strokeWidth={1.719}
      d="M15.011 17.158h14.957l-1.46 11.604H13.291"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={1.719}
      d="M10.713 26.613h-1.89a6.934 6.934 0 0 1-6.963-6.962v-2.407h15.816v2.492c0 3.783-3.094 6.877-6.962 6.877Z"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={1.719}
      d="M14.238 25.754v2.235c0 .515-.43.945-.946.945H6.244a.954.954 0 0 1-.946-.945v-2.235"
    />
  </Svg>
);
export default SvgFood;
