import * as React from "react";
const SvgHeartrectangleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm6.85-13.12c-1.85 0-3.28 1.41-3.28 3.49 0 3.38 3.8 6.06 5.3 6.98.22.12.5.28.68.28.19 0 .45-.16.65-.28 1.5-.94 5.31-3.6 5.31-6.98 0-2.08-1.43-3.49-3.27-3.49-1.27 0-2.19.73-2.7 1.62-.51-.89-1.43-1.62-2.69-1.62" />
  </svg>
);
export default SvgHeartrectangleBold;
