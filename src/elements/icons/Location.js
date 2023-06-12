import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgLocation = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 16 16"
    {...props}>
    <Path
      stroke="#F3A8A2"
      strokeMiterlimit={10}
      strokeWidth={1.386}
      d="M7.683 8.347a1.663 1.663 0 1 0 0-3.327 1.663 1.663 0 0 0 0 3.327Z"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={1.386}
      d="M12.604 6.683a4.97 4.97 0 0 0-4.99-4.99c-2.772 0-4.92 2.218-4.92 4.99 0 1.594.83 2.842 1.87 3.881.901.901 3.12 3.396 3.12 3.396s2.148-2.356 3.118-3.396c.97-1.04 1.802-2.356 1.802-3.881Z"
    />
  </Svg>
);
export default SvgLocation;
