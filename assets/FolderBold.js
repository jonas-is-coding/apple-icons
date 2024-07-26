import * as React from "react";
const SvgFolderBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.508h19.2c2.49 0 3.94-1.46 3.94-4.11V6.318c0-2.66-1.47-4.12-4.14-4.12h-10.29c-.9 0-1.45-.21-2.2-.78l-.59-.47c-.91-.71-1.53-.95-2.88-.95h-3.27c-2.42 0-3.91 1.47-3.91 4.11v14.29c0 2.66 1.46 4.11 4.14 4.11m-1.12-18.04c0-.93.55-1.45 1.48-1.45h1.87c.91 0 1.43.2 2.19.79l.59.48c.91.7 1.55.94 2.88.94h10.78c.94 0 1.45.46 1.45 1.45v.72H3.022Zm1.44 15.02c-.93 0-1.44-.47-1.44-1.47v-8.14h21.24v8.16c0 .98-.51 1.45-1.45 1.45Z" />
  </svg>
);
export default SvgFolderBold;
