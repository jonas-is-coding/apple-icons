import * as React from "react";
const SvgButtonroundedtophorizontalfillBold = ({
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
    <path d="M9.952.004c-6.99 0-9.95 3.05-9.95 9.91v7.47c0 2.63 1.45 4.07 4.1 4.07h19.61c2.63 0 4.09-1.45 4.09-4.07v-7.47c0-6.86-2.97-9.91-9.95-9.91Z" />
  </svg>
);
export default SvgButtonroundedtophorizontalfillBold;
