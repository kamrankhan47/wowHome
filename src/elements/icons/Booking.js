import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBooking = props => (
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
      strokeWidth={2.073}
      d="M18.611 21.378H5.554c-.829 0-1.554-.725-1.554-1.554V3.554C4 2.725 4.725 2 5.554 2h13.057c.83 0 1.555.725 1.555 1.554v16.27c0 .932-.726 1.554-1.555 1.554Z"
    />
    <Path
      fill="#B8B8D2"
      d="M8.767 9.876a1.036 1.036 0 1 0 0-2.073 1.036 1.036 0 0 0 0 2.073Z"
    />
    <Path
      stroke="#B8B8D2"
      strokeMiterlimit={10}
      strokeWidth={2.073}
      d="M11.668 8.84h4.25"
    />
    <Path
      fill="#B8B8D2"
      d="M8.767 15.575a1.036 1.036 0 1 0 0-2.073 1.036 1.036 0 0 0 0 2.073Z"
    />
    <Path
      stroke="#B8B8D2"
      strokeMiterlimit={10}
      strokeWidth={2.073}
      d="M11.668 14.539h4.25"
    />
  </Svg>
);
export default SvgBooking;
