import * as React from "react";
const SvgLjoystickfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.892 16.24c8.06 0 12.9-3.63 12.9-8.12S20.952 0 12.882 0C4.842 0 .002 3.63.002 8.12s4.84 8.12 12.89 8.12m-1.53-4.06c-.87 0-1.4-.58-1.4-1.54V5.11c0-.96.54-1.54 1.4-1.54.88 0 1.4.59 1.4 1.54v4.82h2.4c.73 0 1.2.43 1.2 1.12s-.47 1.13-1.2 1.13Zm1.53 9.94c3.31 0 5.39-1.55 5.39-4.2v-.37c-1.65.39-3.46.59-5.39.59-1.92 0-3.73-.2-5.38-.59v.37c0 2.65 2.06 4.2 5.38 4.2" />
  </svg>
);
export default SvgLjoystickfillBold;
