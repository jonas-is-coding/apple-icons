import * as React from "react";
const Svg4LBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.812 17.6h7.78c.83 0 1.46-.63 1.46-1.44s-.63-1.43-1.46-1.43h-6.04V1.75c0-.97-.77-1.75-1.73-1.75s-1.75.78-1.75 1.75v14.02c0 1.15.76 1.83 1.74 1.83m-8.97.27c.94 0 1.68-.75 1.68-1.71v-1.81h.96c.81 0 1.43-.58 1.43-1.4 0-.8-.62-1.41-1.43-1.41h-.96V2.72c0-1.6-1.2-2.72-2.88-2.72-1.63 0-2.63 1.04-3.32 2.34l-4.9 8.41c-.27.49-.42 1.03-.42 1.53 0 1.11.68 2.07 2.19 2.07h5.98v1.81c0 1.02.78 1.71 1.67 1.71m-1.6-6.22h-5.23v-.11l5.12-8.63h.11Z" />
  </svg>
);
export default Svg4LBold;
