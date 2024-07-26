import * as React from "react";
const SvgRectangleportraitbadgeplusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.326.002H8.776c-2.66 0-4.11 1.46-4.11 4.14v9.73c.49-.1.98-.16 1.5-.16.51 0 1.03.06 1.52.16v-9.4c0-.94.46-1.45 1.45-1.45h11.83c1 0 1.45.51 1.45 1.45v16.86c0 .93-.45 1.44-1.45 1.44h-7a6.9 6.9 0 0 1-1.06 3.02h8.42c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14m-15.15 27.82c3.36 0 6.16-2.81 6.16-6.18 0-3.38-2.77-6.16-6.16-6.16s-6.18 2.79-6.18 6.16c0 3.38 2.79 6.18 6.18 6.18m0-2.19c-.56 0-.94-.38-.94-.93v-2.12h-2.11c-.55 0-.93-.37-.93-.94 0-.56.37-.93.93-.93h2.11v-2.1c0-.55.38-.94.94-.94s.94.38.94.94v2.1h2.11c.55 0 .93.37.93.93 0 .57-.38.94-.93.94h-2.11v2.12c0 .55-.38.93-.94.93" />
  </svg>
);
export default SvgRectangleportraitbadgeplusBold;
