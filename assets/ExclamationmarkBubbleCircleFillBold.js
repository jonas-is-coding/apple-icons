import * as React from "react";
const SvgExclamationmarkbubblecirclefillBold = ({
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
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-2.88-5.51c-.36 0-.6-.26-.6-.67v-1.63h-.16c-1.57 0-2.67-1.04-2.67-2.76v-4.49c0-1.71 1.03-2.77 2.76-2.77h7.13c1.72 0 2.76 1.07 2.76 2.77v4.49c0 1.72-1.04 2.76-2.76 2.76h-3.54l-2.15 1.91c-.31.27-.5.39-.77.39m2.89-6.45c.4 0 .63-.22.65-.62l.09-2.48c.01-.42-.29-.72-.75-.72-.44 0-.75.3-.72.72l.09 2.48c.02.4.26.62.64.62m0 2.04c.46 0 .81-.29.81-.71 0-.44-.35-.73-.81-.73-.45 0-.8.29-.8.73 0 .42.36.71.8.71" />
  </svg>
);
export default SvgExclamationmarkbubblecirclefillBold;
