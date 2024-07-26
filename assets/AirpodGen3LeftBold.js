import * as React from "react";
const SvgAirpodgen3LeftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.402.002c-2.94.01-5.4 2.45-5.4 5.63 0 3.3 4.58 7.27 8.08 7.28 2.56.01 5.58-2.51 5.58-5.49 0-3.64-4.42-7.46-8.26-7.42m.5 5.75c-.37.55-1.13.68-1.69.27l-1.65-1.17c-.56-.4-.66-1.13-.24-1.68.37-.55 1.12-.69 1.65-.29l1.65 1.18c.54.4.68 1.14.28 1.69m3.24 5.24c-.68 0-.7-.86-.06-1.93.67-1.09 1.73-1.94 2.4-1.94.68 0 .72.85.06 1.94-.65 1.07-1.72 1.93-2.4 1.93m-4.35 10.51c.96 0 1.6-.55 1.6-1.47v-5.92c-1.61-.39-3.23-1.3-4.58-2.49v8.41c0 .92.64 1.47 1.59 1.47Z" />
  </svg>
);
export default SvgAirpodgen3LeftBold;
