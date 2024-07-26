import * as React from "react";
const SvgRectanglefillbadgecheckmarkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.888 22.402h17.12c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11h-19.69c-2.68 0-4.14 1.45-4.14 4.11v6.21c4.35 0 7.92 3.59 7.92 7.92 0 1.53-.43 2.96-1.21 4.16m-6.71 2.02c3.36 0 6.16-2.8 6.16-6.18 0-3.37-2.77-6.16-6.16-6.16s-6.18 2.79-6.18 6.16c0 3.39 2.79 6.18 6.18 6.18m-.76-2.8c-.28 0-.6-.08-.81-.31l-1.94-2.09c-.17-.21-.3-.47-.3-.73 0-.64.49-1.02 1.02-1.02.3 0 .56.11.74.32l1.2 1.36 2.62-3.6c.19-.27.49-.45.84-.45.55 0 1.01.45 1.01 1.01 0 .18-.06.4-.19.58l-3.37 4.57c-.17.22-.5.36-.82.36" />
  </svg>
);
export default SvgRectanglefillbadgecheckmarkBold;
