import * as React from "react";
const SvgCheckmarkrectangleportraitfillBold = ({
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
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm9.1-2.87c-.52 0-.93-.23-1.31-.69l-2.75-3.28c-.27-.33-.38-.62-.38-.97 0-.72.59-1.29 1.3-1.29.43 0 .75.16 1.07.54l2.04 2.51 4.57-7.26c.3-.49.69-.74 1.15-.74.7 0 1.35.52 1.35 1.25 0 .29-.12.61-.33.91l-5.44 8.31c-.31.46-.76.71-1.27.71" />
  </svg>
);
export default SvgCheckmarkrectangleportraitfillBold;
