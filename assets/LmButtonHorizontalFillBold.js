import * as React from "react";
const SvgLmbuttonhorizontalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.352 22.112h9.56c6.98 0 9.35-2.45 9.35-9.24v-3.63c0-6.79-2.37-9.24-9.35-9.24h-9.56c-6.98 0-9.35 2.45-9.35 9.24v3.63c0 6.79 2.37 9.24 9.35 9.24m-1.54-6.26c-.66 0-1.04-.42-1.04-1.1v-7.59c0-.58.48-1.04 1.06-1.04.57 0 1.04.46 1.04 1.04v6.96h2.06c.47 0 .87.4.87.87 0 .48-.4.86-.87.86Zm6.04.17c-.6 0-.93-.39-.93-.99v-7.47c0-.92.55-1.43 1.47-1.43.77 0 1.26.31 1.44 1.15l1.28 5.69h.03l1.27-5.69c.17-.8.64-1.15 1.46-1.15.92 0 1.47.5 1.47 1.43v7.47c0 .6-.32.99-.93.99-.6 0-.91-.38-.91-.99v-5.75h-.06l-1.3 5.61c-.14.6-.45.93-1 .93-.56 0-.88-.36-.99-.92l-1.32-5.62h-.07v5.75c0 .6-.34.99-.91.99" />
  </svg>
);
export default SvgLmbuttonhorizontalfillBold;
