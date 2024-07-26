import * as React from "react";
const SvgArrowuptolinecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.3-16.59c-.6 0-1.06-.47-1.06-1.06 0-.62.46-1.1 1.06-1.1h8.6c.61 0 1.08.48 1.08 1.1 0 .59-.47 1.06-1.08 1.06Zm4.3 11.14c-.68 0-1.12-.47-1.12-1.16v-4.19l.14-1.84-1.49 1.71-.74.78c-.21.22-.46.35-.81.35-.61 0-1.06-.45-1.06-1.1 0-.26.13-.58.35-.79l3.9-3.82c.21-.22.5-.35.83-.35.32 0 .61.14.82.35l3.92 3.81c.25.22.35.52.35.8 0 .64-.45 1.1-1.04 1.1-.34 0-.61-.14-.82-.35l-.78-.78-1.47-1.7.14 1.83v4.19c0 .69-.46 1.16-1.12 1.16" />
  </svg>
);
export default SvgArrowuptolinecirclefillBold;
