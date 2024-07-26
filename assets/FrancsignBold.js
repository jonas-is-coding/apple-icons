import * as React from "react";
const SvgFrancsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.082 21.196c1.33 0 2.1-.85 2.1-2.18v-1.58h5.1c.41 0 .71-.29.71-.69s-.3-.7-.71-.7h-5.1v-3.84h6.9c1.09 0 1.8-.65 1.8-1.65 0-.99-.71-1.65-1.8-1.65h-6.9v-5.46h7.58c1.13 0 1.87-.68 1.87-1.72 0-1.05-.74-1.73-1.87-1.73h-9.68c-1.33 0-2.09.81-2.09 2.17v13.88H.712c-.41 0-.71.3-.71.7s.3.69.71.69h2.28v1.58c0 1.34.75 2.18 2.09 2.18" />
  </svg>
);
export default SvgFrancsignBold;
