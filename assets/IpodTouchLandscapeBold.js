import * as React from "react";
const SvgIpodtouchlandscapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.542 17.386c2.13 0 3.56-1.47 3.56-3.69V3.546c0-2.13-1.43-3.55-3.56-3.55H3.562c-2.13 0-3.56 1.42-3.56 3.55v10.15c0 2.22 1.43 3.69 3.55 3.69Zm-1.62-3.02H5.182V3.026h16.74Zm3.64-5.68c0 .68-.54 1.22-1.22 1.22-.67 0-1.21-.54-1.21-1.22 0-.67.54-1.21 1.21-1.21.68 0 1.22.54 1.22 1.21m-22.15 0c0 .45-.38.83-.83.83-.46 0-.82-.38-.82-.83 0-.46.36-.82.82-.82.45 0 .83.36.83.82" />
  </svg>
);
export default SvgIpodtouchlandscapeBold;
