import * as React from "react";
const SvgCirclebadgeexclamationmarkfillBold = ({
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
    <path d="M12.372 24.766c1.6 0 3.13-.32 4.54-.88a7.92 7.92 0 0 1-2.12-5.37c0-4.35 3.58-7.93 7.93-7.93q1.005 0 1.92.24c-.77-6.07-6.01-10.83-12.28-10.83-6.78 0-12.36 5.59-12.36 12.38 0 6.8 5.58 12.39 12.37 12.39m10.35-.07c3.36 0 6.18-2.82 6.18-6.18 0-3.38-2.79-6.16-6.18-6.16-3.37 0-6.16 2.78-6.16 6.16 0 3.37 2.79 6.18 6.16 6.18m0-5.15c-.55 0-.95-.39-.97-.92l-.11-3.24c-.02-.62.44-1.07 1.08-1.07.66 0 1.11.44 1.09 1.07l-.11 3.24c-.01.53-.42.92-.98.92m0 3.13c-.7 0-1.24-.5-1.24-1.2 0-.68.54-1.18 1.24-1.18s1.25.52 1.25 1.18c-.01.7-.53 1.2-1.25 1.2" />
  </svg>
);
export default SvgCirclebadgeexclamationmarkfillBold;
