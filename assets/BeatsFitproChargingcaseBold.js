import * as React from "react";
const SvgBeatsfitprochargingcaseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 10.419c0 6.6 4.69 10.42 12.85 10.42h12.13c8.17 0 12.87-3.82 12.87-10.42s-4.7-10.42-12.87-10.42h-12.13c-8.16 0-12.85 3.82-12.85 10.42m27.38-2.1h-16.92c-.62 0-1.12.32-1.36.83h-5.99c.6-3.91 4.07-6.13 9.75-6.13h12.12c5.69 0 9.15 2.22 9.75 6.13h-5.99c-.22-.51-.72-.83-1.36-.83m-16.92 2.94h16.92c.61 0 1.09-.29 1.33-.77h6.1c-.03 4.65-3.61 7.32-9.83 7.32h-12.12c-6.23 0-9.79-2.67-9.84-7.32h6.12c.24.48.74.77 1.32.77m8.46 3.57c.69-.02 1.26-.6 1.26-1.25 0-.69-.57-1.25-1.26-1.25s-1.25.56-1.25 1.25c0 .67.56 1.26 1.25 1.25" />
  </svg>
);
export default SvgBeatsfitprochargingcaseBold;
