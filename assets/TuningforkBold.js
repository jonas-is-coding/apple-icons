import * as React from "react";
const SvgTuningforkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.935 25.934c1.61 0 2.92-1.32 2.92-2.93 0-.16-.01-.3-.02-.43l3.08-3.08 4.47-.01c.84 0 1.77-.33 2.37-.91l9.73-9.59c.71-.69.68-1.79 0-2.5-.65-.68-1.79-.68-2.48 0l-9.33 9.33c-.22.22-.49.34-.82.34h-2.66l-.18-.19v-2.97c0-.32.12-.6.33-.82l9.17-9.17c.68-.68.68-1.79.01-2.48a1.76 1.76 0 0 0-2.5 0l-9.58 9.74c-.64.64-.92 1.52-.92 2.36l-.01 4.28-3.17 3.18c-.13-.01-.27-.03-.43-.03-1.6 0-2.91 1.32-2.91 2.95 0 1.61 1.31 2.93 2.93 2.93" />
  </svg>
);
export default SvgTuningforkBold;
