import * as React from "react";
const SvgLevelBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.562 13.91h22.85c2.26.01 3.55-1.28 3.55-3.52V3.53c0-2.24-1.3-3.53-3.56-3.53H3.562C1.302 0 .002 1.29.002 3.53v6.86c0 2.24 1.3 3.52 3.56 3.52m.33-2.74c-.72 0-1.15-.42-1.15-1.2V3.94c0-.76.43-1.19 1.16-1.19h1.29v8.42Zm11.1-3.51c3.34 0 5.87-1.94 6.44-4.91h1.92v8.42H6.612l.01-8.42h1.91c.59 2.97 3.12 4.91 6.46 4.91m0-2.87c1.43 0 2.52-.79 2.84-2.04h2.06c-.5 2.17-2.4 3.59-4.9 3.59-2.51 0-4.41-1.41-4.91-3.59h2.06c.32 1.25 1.42 2.04 2.85 2.04m11.07-2.04c.73 0 1.16.43 1.16 1.19v6.03c0 .78-.44 1.2-1.16 1.2h-1.28V2.75Z" />
  </svg>
);
export default SvgLevelBold;
