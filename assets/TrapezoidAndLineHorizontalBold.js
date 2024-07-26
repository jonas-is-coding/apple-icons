import * as React from "react";
const SvgTrapezoidandlinehorizontalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.532 12.02h3.43v3.13c0 2.29 1.46 3.53 3.99 3.92l12.22 1.91c2.49.37 4-1.33 4-3.93v-5.03h3.43c.93 0 1.53-.69 1.53-1.5 0-.84-.6-1.52-1.53-1.52h-3.43V3.97c0-2.66-1.46-4.31-4-3.91l-12.22 1.9c-2.53.38-3.99 1.63-3.99 3.91V9h-3.43c-.92 0-1.53.68-1.53 1.52 0 .81.61 1.5 1.53 1.5m6.36-5.8c0-.84.55-1.31 1.39-1.43l11.47-1.78c.9-.14 1.46.45 1.46 1.46V9H7.892Zm1.39 10.02c-.84-.13-1.39-.6-1.39-1.44v-2.78h14.32v4.55c0 .97-.57 1.59-1.46 1.44Z" />
  </svg>
);
export default SvgTrapezoidandlinehorizontalBold;
