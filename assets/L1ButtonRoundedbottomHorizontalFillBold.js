import * as React from "react";
const SvgL1ButtonroundedbottomhorizontalfillBold = ({
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
    <path d="M9.952 21.454h7.9c6.98 0 9.95-3.06 9.95-9.91v-7.47c0-2.62-1.46-4.07-4.09-4.07H4.102c-2.65 0-4.1 1.44-4.1 4.07v7.47c0 6.85 2.96 9.91 9.95 9.91m7.37-5.9c-.58 0-1.03-.46-1.03-1.03v-6.54l-.85.66c-.16.13-.3.18-.5.18-.36 0-.69-.25-.69-.73 0-.35.16-.59.44-.8l1.11-.87c.37-.27.78-.53 1.34-.53.75 0 1.22.4 1.22 1.15v7.48c0 .57-.47 1.03-1.04 1.03m-7.07-.12c-.64 0-1.01-.42-1.01-1.08v-7.43a1.035 1.035 0 0 1 2.07 0v6.81h2c.47 0 .84.39.84.86 0 .45-.37.84-.84.84Z" />
  </svg>
);
export default SvgL1ButtonroundedbottomhorizontalfillBold;
