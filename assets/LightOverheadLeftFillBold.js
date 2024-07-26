import * as React from "react";
const SvgLightoverheadleftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M29.9 2.59a1.3 1.3 0 0 0 1.29-1.29c0-.7-.57-1.3-1.29-1.3H6.2a1.295 1.295 0 0 0 0 2.59h2.33c.48 5.06 4.21 8.44 9.53 8.44 5.31 0 9.03-3.38 9.52-8.44ZM.39 12.23c.56.54 1.31.57 1.85.02l5.61-5.63c-.4-.85-.69-1.79-.86-2.81L.4 10.41c-.53.53-.53 1.3-.01 1.82m3.14 3.13c.55.57 1.31.58 1.85.01l5.19-5.19a9.5 9.5 0 0 1-1.76-1.92l-5.28 5.29c-.53.54-.53 1.3 0 1.81m3.14 3.16c.54.52 1.29.53 1.84 0l6.2-6.22c-.94-.23-1.82-.59-2.61-1.06l-5.43 5.44c-.54.53-.53 1.28 0 1.84m3.14 3.12c.54.54 1.29.54 1.84 0l9.21-9.22c-1.34.33-2.47.36-3.92.27l-7.13 7.13c-.54.54-.54 1.3 0 1.82" />
  </svg>
);
export default SvgLightoverheadleftfillBold;
