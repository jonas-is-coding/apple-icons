import * as React from "react";
const SvgMapfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m9.392 20.214 5.1 2.84c.43.23.74.4 1.22.49V3.574l-4.93-2.92c-.56-.31-1.02-.55-1.39-.65Zm-9.39 1.16c0 1.28.87 1.95 1.96 1.95.41 0 .82-.11 1.24-.34l4.29-2.32V.024q-.51.135-1.23.54l-4.9 2.76c-.94.52-1.36 1.26-1.36 2.3Zm17.61 2.08c.15-.05.33-.12.51-.22l5.67-3.18c1.01-.55 1.42-1.28 1.42-2.34V2.184c0-1.35-.9-1.97-2.13-1.97-.45 0-.98.14-1.43.4l-4.04 2.23Z" />
  </svg>
);
export default SvgMapfillBold;
