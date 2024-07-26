import * as React from "react";
const SvgItalicBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.512 17.298h7.64c.9 0 1.51-.52 1.51-1.41 0-.86-.6-1.38-1.5-1.38h-2.01l2.52-11.73h2.01c.89 0 1.5-.52 1.5-1.39s-.58-1.39-1.5-1.39h-7.65c-.9 0-1.5.52-1.5 1.39s.61 1.39 1.51 1.39h2.01l-2.52 11.73h-2.02c-.91 0-1.51.52-1.51 1.38 0 .89.62 1.41 1.51 1.41" />
  </svg>
);
export default SvgItalicBold;
