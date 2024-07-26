import * as React from "react";
const SvgCrosscirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-6.69-11.39v-2c0-.92.62-1.56 1.56-1.56h2.57v-2.55c0-.95.63-1.57 1.57-1.57h1.98c.93 0 1.57.62 1.57 1.57v2.55h2.56c.94 0 1.57.64 1.57 1.56v2c0 .93-.63 1.57-1.57 1.57h-2.56v2.55c0 .95-.64 1.57-1.57 1.57h-1.98c-.94 0-1.57-.62-1.57-1.57v-2.55h-2.56c-.94 0-1.57-.64-1.57-1.57" />
  </svg>
);
export default SvgCrosscirclefillBold;
