import * as React from "react";
const SvgArrowdownforwardandarrowupbackwardrectanglefillBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m8.35-17.89c.57 0 1 .46 1 1.03v4.41c0 .85-.51 1.3-1.33 1.3h-4.44c-.57 0-1.01-.41-1.01-.99 0-.56.44-.99 1.02-.99h1.28l1.3.14-1.42-1.17-2.09-2.1c-.24-.25-.37-.54-.37-.82 0-.62.47-1.08 1.07-1.08.33 0 .61.12.88.37l2.06 2.07 1.17 1.42-.1-1.39v-1.18c0-.59.42-1.02.98-1.02m2.99 13.38c-.58 0-.99-.45-.99-1.03v-4.41c0-.85.5-1.3 1.32-1.3h4.44c.57 0 1.01.41 1.01.99 0 .56-.44.99-1.02.99h-1.27l-1.31-.14 1.42 1.18 2.09 2.09c.24.25.38.54.38.82 0 .62-.47 1.08-1.08 1.08-.33 0-.61-.12-.88-.37l-2.06-2.07-1.17-1.41.1 1.38v1.18c0 .59-.41 1.02-.98 1.02" />
  </svg>
);
export default SvgArrowdownforwardandarrowupbackwardrectanglefillBold;
