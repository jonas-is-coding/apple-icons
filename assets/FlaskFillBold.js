import * as React from "react";
const SvgFlaskfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.46 26.076h16.86c2.1 0 3.46-1.57 3.46-3.46 0-.61-.21-1.32-.76-2.14l-6.12-9.38v-8.33c.74-.06 1.28-.66 1.28-1.38 0-.78-.59-1.39-1.39-1.39h-9.8c-.81 0-1.4.61-1.4 1.39 0 .72.55 1.32 1.29 1.38v8.33l-6.19 9.46c-.5.77-.69 1.45-.69 2.06 0 1.89 1.36 3.46 3.46 3.46m6.1-20.04v-1.58h2.09c.44 0 .8.35.8.77 0 .47-.34.81-.8.81Zm0 3.2v-1.58h2.09c.44 0 .81.34.81.77 0 .46-.34.81-.8.81Zm0 3.19v-1.59h2.1c.45 0 .8.34.8.78 0 .45-.34.81-.8.81Z" />
  </svg>
);
export default SvgFlaskfillBold;
