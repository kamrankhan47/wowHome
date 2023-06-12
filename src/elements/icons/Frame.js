import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgFrame = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 15 14"
    {...props}>
    <G strokeMiterlimit={10} strokeWidth={1.315} clipPath="url(#Frame_svg__a)">
      <Path
        stroke="#F3A8A2"
        d="M.657 9.53H13.54M4.732 5.258v8.085M9.202 5.258v8.085"
      />
      <Path
        stroke="#6E6BE8"
        d="M12.028 13.343H2.235a1.6 1.6 0 0 1-1.578-1.578V3.09a1.6 1.6 0 0 1 1.578-1.577h9.793a1.6 1.6 0 0 1 1.578 1.577v8.676a1.6 1.6 0 0 1-1.578 1.578ZM.657 5.784H13.54"
      />
      <Path stroke="#F3A8A2" d="M4.732 0v3.09M9.202 0v3.09" />
    </G>
    <Defs>
      <ClipPath id="Frame_svg__a">
        <Path fill="#fff" d="M0 0h14.263v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgFrame;
