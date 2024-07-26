import * as React from "react";
const SvgArrowdownleftandarrowuprightrectanglefillBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m16.41-11.56c-.57 0-.99-.44-.99-1.02v-1.17l.11-1.38-1.17 1.4-2.06 2.07c-.27.25-.55.37-.87.37-.61 0-1.08-.46-1.08-1.07 0-.29.13-.59.37-.82l2.1-2.1 1.41-1.17-1.3.14h-1.27c-.59 0-1.02-.42-1.02-.99 0-.58.43-1 1-1h4.46c.79 0 1.31.46 1.31 1.3v4.41c0 .58-.42 1.03-1 1.03m-13.13.72c.57 0 .99.44.99 1.02v1.18l-.11 1.37 1.17-1.4 2.06-2.07c.27-.25.55-.37.87-.37.62 0 1.09.46 1.09 1.07 0 .29-.14.59-.38.82l-2.1 2.1-1.41 1.17 1.31-.14h1.26c.59 0 1.02.42 1.02 1 0 .57-.43.99-1 .99h-4.46c-.79 0-1.3-.45-1.3-1.3v-4.4c0-.59.41-1.04.99-1.04" />
  </svg>
);
export default SvgArrowdownleftandarrowuprightrectanglefillBold;
