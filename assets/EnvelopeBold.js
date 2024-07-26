import * as React from "react";
const SvgEnvelopeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 21.183h21.33c2.49 0 3.95-1.45 3.95-4.11V4.113c0-2.66-1.47-4.11-4.13-4.11H3.952c-2.49 0-3.95 1.45-3.95 4.11v12.96c0 2.66 1.46 4.11 4.14 4.11m9.63-10.12-9.17-8.27h20.22l-9.18 8.27c-.3.27-.61.41-.93.41-.33 0-.64-.14-.94-.41m6.6-.98 6.25-5.64v11.89Zm-17.58-5.64 6.26 5.64-6.26 6.25Zm1.46 13.96h-.06l6.68-6.68 1.4 1.25c.79.73 1.54 1.03 2.44 1.03s1.64-.3 2.43-1.03l1.41-1.25 6.68 6.68h-.06Z" />
  </svg>
);
export default SvgEnvelopeBold;
