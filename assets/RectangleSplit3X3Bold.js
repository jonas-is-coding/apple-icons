import * as React from "react";
const SvgRectanglesplit3X3Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m-1.12-17.93c0-.99.51-1.45 1.44-1.45h3.94v3.53h-5.38Zm8.28 2.08v-3.53h5.37v3.53Zm12.21-3.53c.93 0 1.44.46 1.44 1.45v2.08h-5.38v-3.53Zm-20.49 9.95v-3.54h5.38v3.54Zm8.28 0v-3.54h5.37v3.54Zm8.27 0v-3.54h5.38v3.54Zm-15.11 6.41c-.93 0-1.44-.46-1.44-1.45v-2.08h5.38v3.53Zm6.84 0v-3.53h5.37v3.53Zm13.65-1.45c0 .99-.51 1.45-1.44 1.45h-3.94v-3.53h5.38Z" />
  </svg>
);
export default SvgRectanglesplit3X3Bold;
