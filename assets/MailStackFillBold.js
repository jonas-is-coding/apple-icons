import * as React from "react";
const SvgMailstackfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.842 1.748h14.94c-.09-1.13-.8-1.75-1.99-1.75H6.832c-1.19 0-1.9.62-1.99 1.75m-2.35 3.62h19.63c-.15-1.2-.81-1.9-2.18-1.9H4.662c-1.37 0-2.01.7-2.17 1.9m1.5 21.71h16.62c2.59 0 4-1.4 4-3.97v-11.83c0-2.56-1.41-3.97-4-3.97H3.992c-2.59 0-3.99 1.41-3.99 3.97v11.83c0 2.57 1.4 3.97 3.99 3.97m13.83-9.35a2.93 2.93 0 0 1-2.94-2.93 2.936 2.936 0 1 1 2.94 2.93m-12.28-3.33c-.55 0-.96-.45-.96-.97 0-.53.41-.98.96-.98h6.6c.54 0 .95.44.95.98 0 .51-.41.97-.95.97Zm0 3.16a.96.96 0 0 1-.96-.96c0-.53.41-.99.96-.99h4.64c.54 0 .95.44.95.99 0 .51-.42.96-.95.96Z" />
  </svg>
);
export default SvgMailstackfillBold;
