import * as React from "react";
const SvgHandpointleftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M26.1 11.867c0-4.36-2.22-7.74-7.4-9.53l-6.32-2.2a2.4 2.4 0 0 0-.82-.14c-.93 0-1.61.69-1.61 1.7 0 .78.46 1.26 1.16 1.56l4.11 1.74c.25.09.34.22.34.37 0 .18-.15.33-.42.33H1.75c-1.03 0-1.75.67-1.75 1.63 0 .91.72 1.6 1.75 1.6h9.32c.44 0 .65.19.65.46 0 .23-.22.42-.65.42H8.22c-.53 0-.82.33-.82.93 0 1.25.83 2.13 2.34 2.13h1.33c.44 0 .65.2.65.47 0 .25-.21.42-.65.42H9.63c-.54 0-.83.32-.83.93 0 1.24.96 2.15 2.36 2.15h.68c.43 0 .63.19.63.46 0 .23-.2.43-.63.43h-1.05c-.36 0-.58.23-.58.6 0 1.37 1.53 2.47 3.79 2.47h2.52c6.03 0 9.58-3.27 9.58-8.93" />
  </svg>
);
export default SvgHandpointleftfillBold;
