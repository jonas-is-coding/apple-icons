import * as React from "react";
const Svg1LaneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 17.793c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V1.513c0-.83-.68-1.51-1.51-1.51s-1.51.68-1.51 1.51Zm19.38 0c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V1.513c0-.83-.68-1.51-1.51-1.51s-1.51.68-1.51 1.51Zm-7.53-2.95c.71 0 1.14-.5 1.14-1.21v-7.75c0-.83-.52-1.3-1.35-1.3-.66 0-1.13.28-1.66.67l-1.2.89c-.31.23-.51.5-.51.89 0 .45.33.82.8.82.22 0 .37-.07.55-.21l1.02-.76h.05v6.75c0 .71.43 1.21 1.16 1.21" />
  </svg>
);
export default Svg1LaneBold;
