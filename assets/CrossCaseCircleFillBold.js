import * as React from "react";
const SvgCrosscasecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.63-7.19c-1.27 0-1.94-.65-1.94-1.93v-5.56c0-1.25.67-1.92 1.94-1.92h1.05v-.65c0-.98.62-1.54 1.7-1.54h3.77c1.08 0 1.7.56 1.7 1.54v.65h1.05c1.27 0 1.94.67 1.94 1.92v5.56c0 1.28-.67 1.93-1.94 1.93Zm2.45-9.41h4.37v-.61c0-.21-.14-.33-.38-.33h-3.6c-.25 0-.39.12-.39.33Zm-.63 5.16c0 .4.26.65.66.65h1.09v1.09c0 .4.25.65.65.65h.83c.39 0 .66-.25.66-.65v-1.09h1.09c.39 0 .66-.25.66-.65v-.86c0-.38-.27-.64-.66-.64h-1.09v-1.09c0-.39-.27-.63-.66-.63h-.83c-.4 0-.65.24-.65.63v1.09h-1.09c-.4 0-.66.26-.66.64Z" />
  </svg>
);
export default SvgCrosscasecirclefillBold;
