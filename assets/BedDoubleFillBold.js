import * as React from "react";
const SvgBeddoublefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.022 6.89h3.21V5.37c0-1.19.66-1.82 1.85-1.82h4.29c1.21 0 1.85.63 1.85 1.82v1.52h2.61V5.37c0-1.19.64-1.82 1.88-1.82h4.15c1.23 0 1.89.63 1.89 1.82v1.52h3.21V3.53c0-2.32-1.25-3.53-3.55-3.53H6.572c-2.29 0-3.55 1.21-3.55 3.53ZM.002 20.04c0 .66.43 1.08 1.09 1.08h.77c.65 0 1.09-.42 1.09-1.08v-1.62c.13.04.59.06.9.06h23.25c.33 0 .78-.02.92-.06v1.62c0 .66.44 1.08 1.09 1.08h.77c.65 0 1.09-.42 1.09-1.08V12.7c0-2.47-1.36-3.81-3.87-3.81H3.852c-2.49 0-3.85 1.34-3.85 3.81Z" />
  </svg>
);
export default SvgBeddoublefillBold;
