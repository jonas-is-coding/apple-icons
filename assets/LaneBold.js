import * as React from "react";
const SvgLaneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 17.793c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V1.513c0-.83-.68-1.51-1.51-1.51s-1.51.68-1.51 1.51Zm19.38 0c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V1.513c0-.83-.68-1.51-1.51-1.51s-1.51.68-1.51 1.51Z" />
  </svg>
);
export default SvgLaneBold;
