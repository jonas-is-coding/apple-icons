import * as React from "react";
const SvgCarseatleftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.223 20.669c1.13 4.1 2.26 5.36 4.89 5.36h14.27c1.93 0 3.21-1.06 3.69-3l4.56-18.44c.72-2.88-.71-4.59-2.82-4.59-2.53 0-4.62 2.46-4.28 5.72-2.91 2.05-4.2 5.66-3.64 10.04-2.41-.43-5.33-.67-8.22-.67-6.78 0-9.52 1.76-8.45 5.58" />
  </svg>
);
export default SvgCarseatleftfillBold;
