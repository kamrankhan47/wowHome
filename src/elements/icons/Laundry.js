import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgLaundry = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 32 32"
    {...props}>
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={2.174}
      d="M18.306 29.916H5.261C3.413 29.916 2 28.394 2 26.655V8.175c0-1.849 1.522-3.262 3.261-3.262h13.045c1.848 0 3.261 1.522 3.261 3.261v18.48c0 1.74-1.413 3.262-3.26 3.262ZM2 10.784h19.567"
    />
    <Path
      stroke="#F7658B"
      strokeMiterlimit={10}
      strokeWidth={2.174}
      d="M11.784 24.698a4.892 4.892 0 1 0 0-9.784 4.892 4.892 0 0 0 0 9.784Z"
    />
    <Path
      fill="#F3A8A2"
      d="M13.632 8.827a.87.87 0 1 0 0-1.74.87.87 0 0 0 0 1.74ZM17.328 8.827a.87.87 0 1 0 0-1.74.87.87 0 0 0 0 1.74Z"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={2.174}
      d="M9.283 4.913v5.87M29.503 25.568h-7.936v-4.131h7.936c.761 0 1.305.543 1.305 1.304v1.522c.108.761-.544 1.305-1.305 1.305ZM21.567 25.568h7.936c.761 0 1.305.543 1.305 1.304v1.522c0 .761-.544 1.305-1.305 1.305H19.176M29.503 21.437h-7.936v-4.131h7.936c.761 0 1.305.543 1.305 1.304v1.522c.108.761-.544 1.305-1.305 1.305Z"
    />
  </Svg>
);
export default SvgLaundry;
