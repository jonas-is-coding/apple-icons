import * as React from "react";
const SvgBubbleleftandtextbubblerightfillBold = ({
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
    <path d="M.002 15.02c0 3.57 2.3 5.76 5.54 5.76h.33v3.28c0 .94.52 1.53 1.38 1.53.6 0 1.07-.27 1.8-.91l3.41-2.97c-.57-1-.86-2.2-.86-3.57v-7.17c0-4.33 2.82-7.14 7.25-7.14h6.99v-.12c-.66-2.34-2.57-3.71-5.4-3.71h-14.7C2.152 0 .002 2.18.002 5.74Zm18.85 8.16h4.01l4.22 3.62c.74.63 1.2.91 1.79.91.86 0 1.36-.59 1.36-1.53v-3h.18c3.24 0 5.14-1.89 5.14-5.04v-7.17c0-3.27-1.99-5.24-5.35-5.24h-11.35c-3.36 0-5.35 1.97-5.35 5.24v7.17c0 3.16 1.99 5.04 5.35 5.04m1.79-9.68c-.64 0-1.12-.54-1.12-1.14 0-.64.48-1.15 1.12-1.15h7.82c.66 0 1.13.51 1.13 1.15 0 .6-.49 1.14-1.13 1.14Zm0 4.45c-.64 0-1.12-.5-1.12-1.12s.48-1.16 1.12-1.16h5.58c.63 0 1.12.52 1.12 1.16 0 .62-.49 1.12-1.12 1.12Z" />
  </svg>
);
export default SvgBubbleleftandtextbubblerightfillBold;
