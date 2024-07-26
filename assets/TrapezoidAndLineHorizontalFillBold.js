import * as React from "react";
const SvgTrapezoidandlinehorizontalfillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M30.132 10.476c0-.84-.6-1.52-1.53-1.52h-3.43v-5.25c0-2.65-1.7-4.05-4.39-3.63l-11.9 1.85c-2.48.37-3.92 1.65-3.92 3.9v3.13h20.21v3.02h3.43c.93 0 1.53-.69 1.53-1.5m-28.6 1.5h3.43v3.12c0 2.25 1.44 3.54 3.92 3.92l11.9 1.86c2.69.4 4.39-1 4.39-3.65v-5.25H4.962v-3.02h-3.43c-.92 0-1.53.68-1.53 1.52 0 .81.61 1.5 1.53 1.5" />
  </svg>
);
export default SvgTrapezoidandlinehorizontalfillBold;
