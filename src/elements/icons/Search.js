import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSearch = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#F3A8A2"
      strokeMiterlimit={10}
      strokeWidth={2.267}
      d="m13.657 13.657 7.029 7.029"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={2.267}
      d="M9.349 15.698A6.349 6.349 0 1 0 9.349 3a6.349 6.349 0 0 0 0 12.698Z"
    />
  </Svg>
);
export default SvgSearch;
