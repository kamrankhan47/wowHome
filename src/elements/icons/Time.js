import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgTime = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 16 16"
    {...props}>
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={1.308}
      d="M14.346 8.346c0 1.766-.72 3.336-1.832 4.448-1.178 1.178-2.748 1.898-4.514 1.898a6.31 6.31 0 0 1-6.346-6.346A6.31 6.31 0 0 1 8 2a6.31 6.31 0 0 1 6.346 6.346Z"
    />
    <Path
      stroke="#F3A8A2"
      strokeMiterlimit={10}
      strokeWidth={1.308}
      d="M8 4.486v4.252h3.075"
    />
  </Svg>
);
export default SvgTime;
