import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgClean = props => (
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
      strokeWidth={1.888}
      d="m14.619 26.28-.472 3.21c-.094.85-.85 1.416-1.7 1.416H6.124c-.85 0-1.51-.661-1.7-1.416L3.009 19.106c-.094-1.039.66-1.888 1.7-1.888h7.457M4.613 17.124a4.633 4.633 0 0 1 4.625-4.626 4.633 4.633 0 0 1 4.626 4.626"
    />
    <Path
      stroke="#F7658B"
      strokeMiterlimit={10}
      strokeWidth={1.888}
      d="m18.49.792 2.737 25.11"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={1.888}
      d="M14.619 26.28h11.233c.378 0 .661.189.756.472l1.321 3.02c.284.567-.188 1.228-.755 1.228H13.958l.661-4.72Z"
    />
    <Path
      stroke="#F3A8A2"
      strokeMiterlimit={10}
      strokeWidth={1.888}
      d="M14.43 26.28h-2.265c-.85 0-1.416-.66-1.416-1.416v-6.23c0-.85.66-1.416 1.416-1.416h2.265c.85 0 1.416.66 1.416 1.416v6.23c0 .85-.66 1.416-1.416 1.416Z"
    />
  </Svg>
);
export default SvgClean;
