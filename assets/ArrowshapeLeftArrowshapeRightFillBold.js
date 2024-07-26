import * as React from "react";
const SvgArrowshapeleftarrowshaperightfillBold = ({
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
    <path d="M.002 10.161c0 .53.23 1.05.64 1.44l8.32 7.86c.64.6 1.18.86 1.84.86 1 0 1.75-.75 1.75-1.74v-3.71h7.39c1.95 0 3.17-1.22 3.17-3.12v-3.18c0-1.94-1.2-3.11-3.17-3.11h-7.39v-3.67c0-1.01-.77-1.79-1.76-1.79-.64 0-1.08.21-1.83.91l-8.32 7.8c-.43.39-.64.92-.64 1.45m49.18 0c0-.52-.22-1.04-.64-1.45l-8.33-7.8c-.74-.68-1.18-.9-1.82-.9-1 0-1.76.79-1.76 1.78v3.68h-7.39c-1.97 0-3.17 1.17-3.17 3.1v3.18c0 1.91 1.21 3.12 3.17 3.12h7.39v3.73c0 .97.75 1.72 1.74 1.72.68 0 1.2-.26 1.84-.84l8.33-7.87c.41-.38.64-.92.64-1.45" />
  </svg>
);
export default SvgArrowshapeleftarrowshaperightfillBold;
