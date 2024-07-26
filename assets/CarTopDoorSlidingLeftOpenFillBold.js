import * as React from "react";
const SvgCartopdoorslidingleftopenfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.372 26.553c.78 0 1.38-.57 1.38-1.38v-7.5h2.6v8.73c0 3.59 2.73 5.13 8.93 5.13 6.23 0 8.96-1.54 8.96-5.13V5.973c0-3.85-3.18-5.97-8.96-5.97-5.74 0-8.93 2.13-8.93 5.97v9.34h-2.6v-1.48c0-.81-.6-1.39-1.38-1.39-.77 0-1.37.58-1.37 1.37v11.37c0 .8.6 1.37 1.37 1.37m12.93-13.3c-1.24 0-2.96.11-3.44.11-.94 0-1.33-.37-1.42-1.33l-.21-2.39c-.16-1.8 1.17-2.51 5.07-2.51s5.23.71 5.07 2.51l-.21 2.39c-.08.96-.48 1.33-1.42 1.33-.48 0-2.25-.11-3.44-.11m0 13.22c-4.02 0-5.3-.62-5.03-2.47l.16-1.14c.22-1.49 1.47-1.99 4.87-1.99 3.41 0 4.65.5 4.86 1.99l.16 1.14c.28 1.85-1.01 2.47-5.02 2.47" />
  </svg>
);
export default SvgCartopdoorslidingleftopenfillBold;
