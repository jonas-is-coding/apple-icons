import * as React from "react";
const SvgEyedropperfullBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m19.625 14.291.43-.42c.73-.76.73-1.67-.03-2.45l-.29-.29c1.98-1.7 4.03-1.77 5.46-3.21 1.92-1.95 1.61-4.89-.05-6.54-1.63-1.67-4.57-1.98-6.54-.06-1.46 1.42-1.52 3.48-3.22 5.46l-.28-.29c-.73-.8-1.67-.77-2.46-.03l-.43.41c-.87.83-.79 1.65.04 2.46l.44.45-8.18 8.18c-4.01 4.02-2.87 4.65-4.51 6.85l1.43 1.53c2.16-1.67 3.07-.39 7.06-4.36l8.24-8.18.45.46c.83.82 1.61.89 2.44.03m-6.63-.69c-.33-.38-.28-.7.11-1.09l1.16-1.17.96.96-1.19 1.17c-.35.35-.75.43-1.04.13" />
  </svg>
);
export default SvgEyedropperfullBold;
