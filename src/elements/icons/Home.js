import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHome = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#B8B8D2"
      strokeMiterlimit={10}
      strokeWidth={2.083}
      d="M13.014 2.93a1.5 1.5 0 0 0-2.028 0l-8.5 7.79A1.5 1.5 0 0 0 2 11.827v8.778a1.5 1.5 0 0 0 1.5 1.5h3.77a1.5 1.5 0 0 0 1.5-1.5v-5.27c0-1.771 1.46-3.23 3.23-3.23s3.23 1.459 3.23 3.23v5.27a1.5 1.5 0 0 0 1.5 1.5h3.77a1.5 1.5 0 0 0 1.5-1.5v-8.777a1.5 1.5 0 0 0-.486-1.106l-8.5-7.792Z"
    />
  </Svg>
);
export default SvgHome;
