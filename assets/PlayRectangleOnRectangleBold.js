import * as React from "react";
const SvgPlayrectangleonrectangleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 19.499h2.02v1.72c0 2.66 1.46 4.12 4.14 4.12h15.97c2.67 0 4.14-1.46 4.14-4.12V9.949c0-2.66-1.47-4.11-4.14-4.11h-2.03v-1.73c0-2.64-1.46-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v11.29c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.46V4.489c0-1 .51-1.47 1.44-1.47h15.32c.94 0 1.44.47 1.44 1.47v1.35h-10.92c-2.68 0-4.14 1.45-4.14 4.11v6.53Zm6.17 5.83c-.95 0-1.44-.47-1.44-1.46v-10.54c0-.99.49-1.45 1.44-1.45h15.3c.94 0 1.46.46 1.46 1.45v10.54c0 .99-.52 1.46-1.46 1.46Zm4.43-2.8c0 .54.58.79 1.06.52l6.62-3.86c.46-.27.45-.89-.01-1.16l-6.61-3.86c-.48-.29-1.06-.03-1.06.52Z" />
  </svg>
);
export default SvgPlayrectangleonrectangleBold;
