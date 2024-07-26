import * as React from "react";
const SvgArrowupleftandarrowdownrightrectanglefillBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m3.28-11.56c-.58 0-.99-.45-.99-1.03v-4.41c0-.84.51-1.3 1.3-1.3h4.46c.57 0 1 .42 1 1 0 .57-.43.99-1.02.99h-1.26l-1.31-.14 1.41 1.17 2.1 2.1c.24.23.38.53.38.82 0 .61-.47 1.07-1.09 1.07-.32 0-.6-.12-.87-.37l-2.06-2.07-1.17-1.4.11 1.38v1.17c0 .58-.42 1.02-.99 1.02m13.13.72c.58 0 1 .45 1 1.04v4.4c0 .85-.52 1.3-1.31 1.3h-4.46c-.57 0-1-.42-1-.99 0-.58.43-1 1.02-1h1.27l1.3.14-1.41-1.17-2.1-2.1c-.24-.23-.37-.53-.37-.82 0-.61.47-1.07 1.08-1.07.32 0 .6.12.87.37l2.06 2.07 1.17 1.4-.11-1.37v-1.18c0-.58.42-1.02.99-1.02" />
  </svg>
);
export default SvgArrowupleftandarrowdownrightrectanglefillBold;
