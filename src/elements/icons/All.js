import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgAll = props => (
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
      strokeWidth={2.058}
      d="M19.535 26.235h-6.379V17.9c0-1.749 1.44-3.19 3.19-3.19 1.749 0 3.189 1.441 3.189 3.19v8.334Z"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={2.058}
      d="M7.086 12.963v13.272h18.519V12.963l2.47 1.646L17.58 7.51c-.823-.514-1.749-.514-2.572 0l-10.39 7.1"
    />
    <Path
      stroke="#6E6BE8"
      strokeMiterlimit={10}
      strokeWidth={2.058}
      d="M26.428 30.144H6.572c-.823 0-1.543-.72-1.543-1.543v-.823c0-.823.72-1.544 1.543-1.544h19.856c.823 0 1.543.72 1.543 1.544v.925c0 .824-.617 1.44-1.543 1.44Z"
    />
    <Path
      stroke="#F3A8A2"
      strokeMiterlimit={10}
      strokeWidth={2.058}
      d="m5.029 5.35 3.19 2.263M27.663 5.35 24.37 7.613M16.551 0v2.984"
    />
  </Svg>
);
export default SvgAll;
