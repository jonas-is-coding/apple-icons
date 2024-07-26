import * as React from "react";
const SvgSignpostleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.427 24.253c0-.76-.62-1.38-1.37-1.38h-3.2v-7.04h6.71c1.84 0 2.92-1.06 2.92-2.87v-6.38c0-1.81-1.08-2.87-2.92-2.87h-6.71v-2.33c0-.76-.62-1.38-1.37-1.38-.76 0-1.38.63-1.38 1.38v2.33h-5.57c-1.09 0-1.69.32-2.43 1.03l-3.01 2.9c-1.47 1.43-1.45 2.86 0 4.26l3.01 2.91c.74.7 1.34 1.01 2.44 1.01l5.56.01v7.04h-3.21c-.75 0-1.38.63-1.38 1.38s.63 1.38 1.38 1.38h9.16c.75 0 1.37-.63 1.37-1.38m1.69-11.29H6.736c-.36 0-.48-.06-.7-.27l-2.72-2.59c-.23-.2-.23-.46 0-.66l2.75-2.62c.18-.17.34-.24.66-.24h14.39c.28 0 .45.18.45.46v5.47c0 .27-.17.45-.45.45" />
  </svg>
);
export default SvgSignpostleftBold;
