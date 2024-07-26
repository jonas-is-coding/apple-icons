import * as React from "react";
const SvgPointforwardtopointcapsulepathfillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.032 20.94h13.25c5.41 0 9.02-3.59 9.02-9.02 0-5.44-3.61-9.04-9.02-9.04h-2.21c-.6-1.67-2.2-2.88-4.09-2.88-2.39 0-4.33 1.96-4.33 4.35 0 2.4 1.94 4.34 4.33 4.34 1.85 0 3.44-1.16 4.06-2.78h2.24c3.58 0 6 2.41 6 6.01 0 3.61-2.42 6-6 6H9.032c-3.61 0-6.01-2.39-6.01-6 0-3.6 2.4-6.01 6.01-6.01h1.06q-.21-.75-.21-1.56c0-.51.07-1 .2-1.46l-1.05-.01c-5.45-.02-9.03 3.6-9.03 9.04 0 5.43 3.58 9.02 9.03 9.02" />
  </svg>
);
export default SvgPointforwardtopointcapsulepathfillBold;
