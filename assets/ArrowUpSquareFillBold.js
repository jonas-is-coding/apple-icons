import * as React from "react";
const SvgArrowupsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.14-17.42c.38 0 .74.13 1.11.48l3.94 3.79c.25.25.39.5.39.86 0 .69-.58 1.16-1.22 1.16-.34 0-.67-.14-.9-.4l-1.46-1.55-.58-.87.12 1.76v5.83c0 .75-.61 1.38-1.4 1.38-.77 0-1.4-.63-1.4-1.38v-5.83l.13-1.78-.58.89-1.46 1.55c-.24.26-.57.4-.92.4-.63 0-1.2-.47-1.2-1.16 0-.36.14-.61.37-.86l3.96-3.79c.37-.35.73-.48 1.1-.48" />
  </svg>
);
export default SvgArrowupsquarefillBold;
