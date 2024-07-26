import * as React from "react";
const SvgRectangleportraitonrectangleportraitfillBold = ({
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
    <path d="M3.922 10.29c0-3.73 2.3-6.04 6.02-6.04h9.56v-.27c-.06-2.59-1.5-3.98-4.11-3.98H4.112C1.452 0 .002 1.45.002 4.14v15.97c0 2.57 1.35 4.01 3.82 4.12h.1Zm21.41 0c0-2.67-1.45-4.14-4.11-4.14H9.942c-2.66 0-4.12 1.47-4.12 4.14v15.97c0 2.67 1.47 4.14 4.12 4.14h11.28c2.65 0 4.11-1.47 4.11-4.14Z" />
  </svg>
);
export default SvgRectangleportraitonrectangleportraitfillBold;
