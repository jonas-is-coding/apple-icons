import * as React from "react";
const SvgDividesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.12-13.85c-.98 0-1.73-.68-1.73-1.55 0-.93.75-1.63 1.73-1.63 1.03 0 1.77.68 1.77 1.63 0 .87-.74 1.55-1.77 1.55m-4.55 3.94c-.76 0-1.31-.51-1.31-1.27s.53-1.26 1.31-1.26h9.13c.78 0 1.3.5 1.3 1.26s-.54 1.27-1.3 1.27Zm4.55 4.54c-.98 0-1.73-.66-1.73-1.55 0-.94.75-1.62 1.73-1.62 1.03 0 1.77.68 1.77 1.62 0 .88-.74 1.55-1.77 1.55" />
  </svg>
);
export default SvgDividesquarefillBold;
