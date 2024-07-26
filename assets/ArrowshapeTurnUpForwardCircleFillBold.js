import * as React from "react";
const SvgArrowshapeturnupforwardcirclefillBold = ({
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
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.43-7.07c-.59 0-.99-.57-.99-1.74 0-4.45 2.09-7.1 6.19-7.1h.12v-2.06c0-.57.43-1.04 1.03-1.04.37 0 .65.15 1.05.53l5.03 4.65c.26.24.39.54.39.83 0 .27-.13.59-.39.83l-5.03 4.67c-.37.35-.67.5-1.05.5-.6 0-1.03-.45-1.03-1.01v-2.06h-.12c-2.11 0-3.32.76-4.15 2.3-.29.54-.62.7-1.05.7" />
  </svg>
);
export default SvgArrowshapeturnupforwardcirclefillBold;
