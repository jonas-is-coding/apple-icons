import * as React from "react";
const SvgMsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.61-5.51c-.73 0-1.16-.46-1.16-1.28v-8.58c0-.95.64-1.58 1.63-1.58.86 0 1.43.42 1.71 1.27l2.32 6.35h.07l2.31-6.35c.27-.85.83-1.27 1.71-1.27.97 0 1.63.63 1.63 1.58v8.58c0 .82-.45 1.28-1.19 1.28-.72 0-1.16-.46-1.16-1.28v-5.89h-.13l-2.1 5.7c-.22.57-.57.83-1.14.83-.56 0-.92-.27-1.11-.83l-2.09-5.7h-.12v5.89c0 .82-.44 1.28-1.18 1.28" />
  </svg>
);
export default SvgMsquarefillBold;
