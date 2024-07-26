import * as React from "react";
const SvgFlagslashcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m5.14-6.22L6.202 7.244c-.26-.27-.26-.74 0-1.02.29-.28.76-.28 1.04 0l11.3 11.3c.27.28.27.72 0 1.01-.28.29-.75.27-1.03 0m-8.49-11.98c.18-.03.36-.03.6-.03 2.18 0 3.53 1.05 5.45 1.05.92 0 1.43-.25 1.83-.25.58 0 .88.32.88.81v5.8c0 .42-.16.74-.39.98Zm3.66 8.61c-.95-.27-1.87-.61-3-.61-.54 0-.95.11-1.19.19v3.3c0 .42-.31.76-.76.76-.41 0-.76-.35-.76-.76v-8.6Z" />
  </svg>
);
export default SvgFlagslashcirclefillBold;
