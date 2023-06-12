import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgRepair = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 32 32"
    {...props}>
    <Path
      stroke="#F3A8A2"
      strokeMiterlimit={10}
      strokeWidth={2.3}
      d="m13.315 18.545-8.51-8.395"
    />
    <Path
      stroke="#F7658B"
      strokeMiterlimit={10}
      strokeWidth={2.3}
      d="m21.71 22.34 3.795 3.795c.575.575.575 1.61 0 2.3L23.55 30.39c-.575.575-1.61.575-2.3 0l-5.75-5.75"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={2.3}
      d="M25.275 13.715 22.86 16.13c-.805.805-2.185.805-2.99 0-.805-.805-.805-2.185 0-2.99l2.415-2.415c-2.3-1.15-5.29-.69-7.13 1.15-1.725 1.84-2.185 4.255-1.61 6.44L6.3 25.56a2.915 2.915 0 0 0 0 4.14 2.915 2.915 0 0 0 4.14 0l7.245-7.245c2.185.69 4.6.115 6.325-1.495 1.955-1.955 2.415-4.83 1.265-7.245Z"
    />
  </Svg>
);
export default SvgRepair;
