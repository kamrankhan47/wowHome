import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgMan = props => (
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
      strokeWidth={1.856}
      d="M12.118 10.782a4.641 4.641 0 1 0 0-9.282 4.641 4.641 0 0 0 0 9.282Z"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={1.856}
      d="M12.118 20.25c5.012 0 7.611-1.114 7.611-1.114s.186-2.413-1.485-3.527c-1.67-1.114-6.126-1.671-6.126-1.671s-4.456.371-6.127 1.67c-1.67 1.3-1.485 3.528-1.485 3.528s2.414 1.114 7.612 1.114Z"
    />
  </Svg>
);
export default SvgMan;
