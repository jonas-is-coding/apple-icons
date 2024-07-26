import * as React from "react";
const SvgRectanglebadgeplusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.886 22.402h15.61c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H8.806c-2.68 0-4.14 1.45-4.14 4.11v6.38a6.8 6.8 0 0 1 3.02 0v-6c0-1 .51-1.47 1.44-1.47h19.05c.93 0 1.44.47 1.44 1.47v13.44c0 .99-.51 1.45-1.44 1.45h-14.21a6.8 6.8 0 0 1-1.08 3.02m-6.71 2.03c3.36 0 6.16-2.81 6.16-6.17 0-3.38-2.77-6.17-6.16-6.17s-6.18 2.79-6.18 6.17c0 3.37 2.79 6.17 6.18 6.17m0-2.18c-.56 0-.94-.37-.94-.94v-2.11h-2.11c-.55 0-.93-.37-.93-.94s.37-.94.93-.94h2.11v-2.09c0-.56.38-.95.94-.95s.94.38.94.95v2.09h2.11c.55 0 .93.37.93.94s-.38.94-.93.94h-2.11v2.11c0 .57-.38.94-.94.94" />
  </svg>
);
export default SvgRectanglebadgeplusBold;
