import * as React from "react";
const SvgR1ButtonroundedbottomhorizontalfillBold = ({
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
    <path d="M9.952 21.454h7.9c6.98 0 9.95-3.06 9.95-9.91v-7.47c0-2.62-1.46-4.07-4.09-4.07H4.102c-2.65 0-4.1 1.44-4.1 4.07v7.47c0 6.85 2.96 9.91 9.95 9.91m8.31-5.9c-.59 0-1.04-.46-1.04-1.03v-6.54l-.85.66c-.15.13-.29.18-.49.18-.37 0-.71-.25-.71-.73 0-.35.17-.59.45-.8l1.11-.87c.37-.27.79-.53 1.35-.53.75 0 1.21.4 1.21 1.15v7.48c0 .57-.46 1.03-1.03 1.03m-8.83.02c-.68 0-1.04-.41-1.04-1.08v-7.36c0-.68.35-1.09 1.03-1.09h1.88c1.88 0 3.03 1.02 3.03 3 0 .99-.35 2.01-1.18 2.52l.92 2.37c.11.23.15.43.17.63.01.65-.45 1.01-.98 1.01-.54 0-.86-.29-1.06-.87l-.98-2.72h-.77v2.51c0 .67-.37 1.08-1.02 1.08m1.02-5.03h.67c.78 0 1.1-.68 1.1-1.45s-.36-1.45-1.1-1.45h-.67Z" />
  </svg>
);
export default SvgR1ButtonroundedbottomhorizontalfillBold;
