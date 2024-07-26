import * as React from "react";
const SvgPlusrectangleportraitBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm3.02-.32V4.472c0-.94.46-1.45 1.45-1.45h11.83c1 0 1.45.51 1.45 1.45v16.86c0 .93-.45 1.44-1.45 1.44H4.472c-.99 0-1.45-.51-1.45-1.44m1.99-8.44c0 .75.54 1.29 1.28 1.29h2.8v2.81c0 .74.55 1.28 1.3 1.28s1.3-.54 1.3-1.28v-2.81h2.82c.73 0 1.27-.54 1.27-1.29 0-.76-.54-1.31-1.27-1.31h-2.82v-2.8c0-.75-.55-1.28-1.3-1.28s-1.3.53-1.3 1.28v2.8h-2.8c-.75 0-1.28.55-1.28 1.31" />
  </svg>
);
export default SvgPlusrectangleportraitBold;
