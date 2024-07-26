import * as React from "react";
const SvgBeatspowerbeatsprochargingcasefillBold = ({
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
    <path d="M7.522 24h9.01c4.96 0 7.55-2.59 7.55-7.54V7.52c0-4.94-2.59-7.52-7.55-7.52h-9.01C2.582 0 .002 2.58.002 7.52v8.94c0 4.95 2.58 7.54 7.52 7.54m4.51-6.4c-3.09 0-5.57-2.5-5.57-5.6 0-2.08 1.11-3.9 2.89-4.91V12c0 1.49 1.17 2.66 2.68 2.66 1.48 0 2.69-1.2 2.69-2.66 0-1.47-1.23-2.71-2.69-2.71-.52 0-1.04.18-1.47.49V6.61c.43-.14.93-.18 1.47-.18 3.04 0 5.59 2.49 5.59 5.57 0 3.05-2.49 5.6-5.59 5.6m0-4.12c-.79 0-1.46-.67-1.46-1.48 0-.79.69-1.45 1.46-1.45.78 0 1.47.7 1.47 1.45 0 .78-.68 1.48-1.47 1.48" />
  </svg>
);
export default SvgBeatspowerbeatsprochargingcasefillBold;
