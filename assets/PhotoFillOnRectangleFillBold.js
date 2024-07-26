import * as React from "react";
const SvgPhotofillonrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.302 3.93h13.93v-.1c-.1-2.48-1.54-3.83-4.12-3.83H4.142C1.462 0 .002 1.45.002 4.11v11.28c0 2.61 1.39 4.05 3.98 4.11h.27V9.94c0-3.72 2.32-6.01 6.05-6.01m0 21.41h15.97c2.67 0 4.14-1.47 4.14-4.12V9.94c0-2.65-1.47-4.1-4.14-4.1h-15.97c-2.68 0-4.14 1.45-4.14 4.1v11.28c0 2.66 1.46 4.12 4.14 4.12m4.66-9.49c-1.33 0-2.42-1.1-2.42-2.43s1.09-2.44 2.42-2.44c1.34 0 2.43 1.11 2.43 2.44a2.44 2.44 0 0 1-2.43 2.43m-4.59 6.6c-.86 0-1.35-.47-1.35-1.35v-.7l2.6-2.37c.4-.35.85-.52 1.28-.52.47 0 .93.17 1.31.54l1.78 1.6 4.42-3.91c.45-.39.94-.58 1.47-.58.52 0 1.03.19 1.45.59l4.22 3.91v1.44c0 .88-.5 1.35-1.34 1.35Z" />
  </svg>
);
export default SvgPhotofillonrectanglefillBold;
