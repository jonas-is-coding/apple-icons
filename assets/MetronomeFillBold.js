import * as React from "react";
const SvgMetronomefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.51 10.586v-3.9c0-.65.4-1.08 1.05-1.08.67 0 1.07.43 1.07 1.08v6.03l2.51 2.52h7.19l-7.7-13.46c-.69-1.18-1.86-1.78-3.06-1.78s-2.39.61-3.07 1.78l-2.47 4.33Zm-1.21 4.67 3.32-.01L3.4 4.956c-.49-.49-1.15-.5-1.66-.02-.53.54-.5 1.2 0 1.7Zm-6.31-3.84-2.17 3.81h5.96Zm20.67 6.13-.26-.45H.74l-.26.46a3.53 3.53 0 0 0-.48 1.78c0 1.93 1.41 3.55 3.55 3.55h18.04c2.14 0 3.55-1.62 3.55-3.55 0-.6-.15-1.22-.48-1.79" />
  </svg>
);
export default SvgMetronomefillBold;
