import * as React from "react";
const SvgPoweroutlettypebsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.5-5.26c-.92 0-1.57-.64-1.57-1.57v-8.74c0-.93.65-1.57 1.57-1.57h9.12c.93 0 1.57.64 1.57 1.57v8.74c0 .93-.64 1.57-1.57 1.57Zm2.02-5.79c.46 0 .83-.36.83-.82v-2.17c0-.45-.37-.82-.83-.82s-.81.37-.81.82v2.17c0 .46.35.82.81.82m5.07 0c.46 0 .82-.36.82-.82v-2.17a.815.815 0 1 0-1.63 0v2.17c0 .46.36.82.81.82m-3.41 3.85h1.76c.27 0 .4-.15.4-.4v-.72c0-.72-.55-1.29-1.28-1.29s-1.28.57-1.28 1.29v.72c0 .25.14.4.4.4" />
  </svg>
);
export default SvgPoweroutlettypebsquarefillBold;
