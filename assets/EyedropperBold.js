import * as React from "react";
const SvgEyedropperBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m19.625 14.301.43-.43c.73-.75.75-1.67-.03-2.44l-.29-.3c1.98-1.7 4.03-1.76 5.46-3.2 1.92-1.96 1.61-4.89-.05-6.55-1.63-1.67-4.57-1.98-6.54-.06-1.46 1.43-1.52 3.48-3.22 5.46l-.28-.29c-.75-.78-1.69-.77-2.46-.02l-.43.41c-.86.84-.79 1.64.04 2.47l.44.43-8.18 8.19c-4.01 4.02-2.87 4.64-4.51 6.86l1.43 1.52c2.16-1.68 3.07-.39 7.06-4.36l8.24-8.18.45.45c.83.82 1.61.9 2.44.04m-15.16 7.83c-.33-.36-.27-.69.11-1.08l9.68-9.71.97.96-9.72 9.71c-.35.34-.75.44-1.04.12" />
  </svg>
);
export default SvgEyedropperBold;
