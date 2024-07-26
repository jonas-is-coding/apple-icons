import * as React from "react";
const SvgFlorinsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.672 21.066c4.11 0 6.25-1.84 6.95-5.89l.66-3.91h4.67c.7 0 1.18-.45 1.18-1.11s-.48-1.12-1.18-1.12h-4.3l.47-2.75c.34-2 1.32-3.04 3.38-3.04.82 0 1.21.11 1.91.06.75-.1 1.19-.53 1.19-1.31 0-.64-.47-1.16-1.05-1.45-.81-.45-1.83-.55-2.6-.55-4.06 0-6.34 1.84-7.01 5.84l-.55 3.2h-4.29c-.71 0-1.18.46-1.18 1.12s.47 1.11 1.18 1.11h3.93l-.59 3.43c-.35 2.04-1.22 3.12-3.49 3.12-.67 0-1.32-.07-1.81-.02-.67.1-1.14.5-1.14 1.29 0 .71.43 1.19 1.09 1.5.74.36 1.7.48 2.58.48" />
  </svg>
);
export default SvgFlorinsignBold;
