import * as React from "react";
const SvgSpeakersquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m9.25-5.61c-.36 0-.65-.14-.98-.47l-2.49-2.33c-.03-.04-.09-.05-.12-.05h-1.7c-1 0-1.54-.55-1.54-1.6v-2.25c0-1.05.54-1.61 1.54-1.61h1.7c.03 0 .1-.01.14-.05l2.47-2.31c.36-.35.63-.49.98-.49.53 0 .93.44.93.96v9.26c0 .53-.4.94-.93.94" />
  </svg>
);
export default SvgSpeakersquarefillBold;
