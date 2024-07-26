import * as React from "react";
const SvgIpodtouchBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 23.551c0 2.12 1.48 3.55 3.69 3.55h10.15c2.13 0 3.55-1.43 3.55-3.56V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56Zm8.71-20.14a.83.83 0 0 1-.84-.83c0-.46.38-.81.84-.81.45 0 .82.35.82.81 0 .47-.37.83-.82.83m-5.69 18.51V5.181h11.35v16.74Zm5.69 3.65c-.68 0-1.22-.55-1.22-1.22a1.21 1.21 0 1 1 2.42 0c0 .67-.54 1.22-1.2 1.22" />
  </svg>
);
export default SvgIpodtouchBold;
