import * as React from "react";
const SvgTvslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M26.442 25.56c.38.38 1.02.36 1.39-.02.39-.38.39-1 0-1.39L3.982.29a.984.984 0 0 0-1.4 0 .99.99 0 0 0 0 1.39Zm.37-23.47H8.322l20.38 20.4h.03c1.09-.54 1.7-1.62 1.7-3.13V5.72c0-2.28-1.36-3.63-3.62-3.63M3.622 22.98h17.72L1.292 2.9h-.05c-.8.58-1.24 1.54-1.24 2.82v13.64c0 2.27 1.35 3.62 3.62 3.62m5.43 4.32h12.34c.7 0 1.26-.58 1.26-1.25 0-.68-.56-1.27-1.26-1.27H9.052c-.71 0-1.28.59-1.28 1.27 0 .67.57 1.25 1.28 1.25" />
  </svg>
);
export default SvgTvslashfillBold;
