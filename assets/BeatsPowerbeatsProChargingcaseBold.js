import * as React from "react";
const SvgBeatspowerbeatsprochargingcaseBold = ({
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
    <path d="M7.522 24h9.01c4.96 0 7.55-2.59 7.55-7.54V7.52c0-4.94-2.59-7.52-7.55-7.52h-9.01C2.582 0 .002 2.58.002 7.52v8.94c0 4.95 2.58 7.54 7.52 7.54m-.29-3.02c-2.77 0-4.21-1.46-4.21-4.22V7.23c0-2.77 1.44-4.21 4.21-4.21h9.63c2.76 0 4.2 1.43 4.2 4.19v9.58c0 2.74-1.44 4.19-4.2 4.19Zm4.8-3.66c2.94 0 5.3-2.43 5.3-5.32 0-2.92-2.43-5.29-5.3-5.29-.51 0-.99.05-1.4.17v3.01c.41-.29.9-.47 1.4-.47 1.37 0 2.55 1.18 2.55 2.58 0 1.38-1.14 2.52-2.55 2.52-1.43 0-2.54-1.1-2.54-2.52V7.35A5.29 5.29 0 0 0 6.742 12c0 2.95 2.35 5.32 5.29 5.32m0-3.91c.74 0 1.4-.67 1.4-1.41 0-.72-.67-1.37-1.4-1.37-.72 0-1.39.62-1.39 1.37 0 .77.63 1.41 1.39 1.41" />
  </svg>
);
export default SvgBeatspowerbeatsprochargingcaseBold;
