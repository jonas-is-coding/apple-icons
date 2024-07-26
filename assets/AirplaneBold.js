import * as React from "react";
const SvgAirplaneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M27.692 12.212c-.01-1.4-1.91-2.64-4.35-2.64h-4.97c-.65 0-.89-.14-1.3-.56L9.002.422c-.27-.28-.58-.42-.92-.42h-1.73c-.3 0-.49.28-.34.6l4.2 8.95-6.1.67-2.18-3.75c-.17-.3-.43-.43-.81-.43h-.55c-.34 0-.57.24-.57.57v11.2c0 .33.23.56.57.56h.55c.38 0 .64-.14.81-.42l2.18-3.75 6.1.67-4.2 8.94c-.15.33.04.61.34.61h1.73c.34 0 .65-.14.92-.42l8.07-8.59c.41-.44.65-.56 1.3-.56h4.97c2.44 0 4.34-1.25 4.35-2.64" />
  </svg>
);
export default SvgAirplaneBold;
