import * as React from "react";
const Svg7LaneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 17.793c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V1.513c0-.83-.68-1.51-1.51-1.51s-1.51.68-1.51 1.51Zm19.38 0c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V1.513c0-.83-.68-1.51-1.51-1.51s-1.51.68-1.51 1.51Zm-9.21-2.95c.54 0 .83-.21 1.03-.71l2.9-6.94c.17-.42.3-.83.3-1.29 0-.77-.6-1.16-1.24-1.16h-4.3c-.54 0-.9.37-.9.89 0 .54.36.91.9.91h3.22v.09l-2.8 6.47c-.11.26-.18.5-.18.78 0 .58.45.96 1.07.96" />
  </svg>
);
export default Svg7LaneBold;
