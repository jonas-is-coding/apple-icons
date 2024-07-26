import * as React from "react";
const SvgShoeprintsfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.142.005c-2.74 0-5.14 3.91-5.14 7.14 0 1.46.48 4.25 1.57 6.54h7.16c1.09-2.29 1.57-5.08 1.57-6.54 0-3.23-2.41-7.14-5.16-7.14m14.77 8.02c-2.58-.92-6.18 1.92-7.29 4.97-.48 1.35-1 4.14-.76 6.67l6.74 2.45c1.81-1.78 3.21-4.24 3.7-5.6 1.1-3.05.19-7.55-2.39-8.49m-14.74 13.29c1.99 0 3.09-1.94 3.09-4.69 0-.24-.01-.58-.06-1.04h-6.09c-.05.46-.06.8-.06 1.04 0 2.75 1.1 4.69 3.12 4.69m7.46 6.75c1.88.68 3.58-.77 4.51-3.34.1-.23.19-.56.32-1.01l-5.74-2.08c-.2.41-.32.74-.41.96-.94 2.58-.57 4.78 1.32 5.47" />
  </svg>
);
export default SvgShoeprintsfillBold;
