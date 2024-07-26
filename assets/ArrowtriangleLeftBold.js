import * as React from "react";
const SvgArrowtriangleleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.73.002c-.54 0-.99.21-1.65.53L1.63 7.542C.52 8.082 0 8.742 0 9.632s.52 1.55 1.63 2.09l14.45 7.02c.67.32 1.12.52 1.66.52 1.07 0 1.94-.82 1.94-2.18v-14.9c0-1.36-.88-2.18-1.95-2.18m-1.23 3.83c.07 0 .11.05.11.13l.01 11.35c0 .09-.05.13-.11.13a.5.5 0 0 1-.13-.04L4.35 9.752c-.06-.03-.1-.06-.1-.12 0-.05.04-.08.1-.12l12.02-5.63c.06-.04.1-.05.13-.05" />
  </svg>
);
export default SvgArrowtriangleleftBold;
