import * as React from "react";
const SvgIpodtouchslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.25 18.711V3.561c0-2.13-1.42-3.56-3.55-3.56H6.55c-1.49 0-2.63.65-3.2 1.76v.03l3.42 3.45v-.06h10.46v10.51Zm-8.68-15.3a.83.83 0 0 1-.84-.83c0-.46.38-.81.84-.81.45 0 .82.35.82.81 0 .47-.37.83-.82.83m9.83 21.46c.38.37 1.02.38 1.39 0a.993.993 0 0 0 0-1.4L1.69 2.381c-.39-.38-1.02-.39-1.41 0-.37.37-.37 1.02 0 1.39Zm-14.85 2.23H16.7c1.39 0 2.45-.61 3.01-1.65v-.02l-3.56-3.55v.04H5.88v-10.31l-3.02-3.02v14.96c0 2.12 1.48 3.55 3.69 3.55m5.02-1.53c-.68 0-1.22-.55-1.22-1.22a1.21 1.21 0 1 1 2.42 0c0 .67-.54 1.22-1.2 1.22" />
  </svg>
);
export default SvgIpodtouchslashBold;
