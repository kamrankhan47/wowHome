import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPest = props => (
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
      strokeWidth={2.286}
      d="M22.114 15.428H9.886a6.146 6.146 0 0 1 6.171-6.17c3.315 0 6.057 2.742 6.057 6.17Z"
    />
    <Path
      fill="#F7658B"
      d="M11.714 21.486a1.257 1.257 0 1 0 0-2.514 1.257 1.257 0 0 0 0 2.514ZM19.714 25.943a1.257 1.257 0 1 0 0-2.514 1.257 1.257 0 0 0 0 2.514Z"
    />
    <Path
      fill="#F3A8A2"
      d="M20.629 21.143a.914.914 0 1 0 0-1.829.914.914 0 0 0 0 1.829ZM11.714 25.6a.914.914 0 1 0 0-1.829.914.914 0 0 0 0 1.83Z"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={2.286}
      d="M22.114 15.315c1.6 1.6 2.629 3.885 2.629 6.285 0 4.915-4 8.8-8.8 8.8-4.8 0-8.8-3.885-8.8-8.8 0-2.4 1.028-4.686 2.628-6.286M15.943 15.429V30.4M15.943 9.257s-.8-4.114-4.229-4.114M16.286 9.257s.8-4.114 4.228-4.114"
    />
  </Svg>
);
export default SvgPest;
