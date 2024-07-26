import * as React from "react";
const SvgArrowtriangleupBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.28 17.73c0-.54-.21-1-.54-1.65L11.73 1.63C11.18.52 10.52 0 9.63 0c-.88 0-1.54.52-2.08 1.63L.54 16.08c-.33.65-.54 1.11-.54 1.65 0 1.07.82 1.95 2.19 1.95l14.9-.02c1.37 0 2.19-.86 2.19-1.93m-3.83-1.23c0 .07-.05.11-.13.11H3.95c-.08 0-.13-.04-.13-.11 0-.04.02-.07.05-.13L9.52 4.34c.03-.05.07-.1.11-.1.06 0 .1.05.12.1l5.65 12.03c.02.06.05.09.05.13" />
  </svg>
);
export default SvgArrowtriangleupBold;
