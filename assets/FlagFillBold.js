import * as React from "react";
const SvgFlagfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.418 23.633c.77 0 1.42-.63 1.42-1.43v-6.22c.35-.1 1.17-.36 2.32-.36 4.14 0 7.22 2.15 11.35 2.15 1.76 0 2.82-.27 3.74-.7.89-.42 1.34-1.21 1.34-2.32V3.423c0-.99-.68-1.65-1.67-1.65-.8 0-1.81.38-3.49.38-4.01 0-7.22-2.15-11.35-2.15-1.7 0-2.68.24-3.72.72-.87.4-1.36 1.01-1.36 2.08v19.4c0 .79.65 1.43 1.42 1.43" />
  </svg>
);
export default SvgFlagfillBold;
