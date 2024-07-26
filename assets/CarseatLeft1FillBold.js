import * as React from "react";
const SvgCarseatleft1FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.223 20.669c1.13 4.1 2.26 5.36 4.89 5.36h14.27c1.93 0 3.21-1.06 3.69-3l4.56-18.44c.72-2.88-.71-4.59-2.82-4.59-2.53 0-4.62 2.46-4.28 5.72-2.91 2.05-4.2 5.66-3.64 10.04-2.41-.43-5.33-.67-8.22-.67-6.78 0-9.52 1.76-8.45 5.58m7.04-9.47c.74 0 1.2-.45 1.2-1.23v-7.71c0-.81-.52-1.27-1.35-1.27-.58 0-.91.15-1.5.56l-1.78 1.18c-.33.22-.48.48-.48.83 0 .5.37.86.87.86.2 0 .35-.04.58-.21l1.17-.76h.08v6.52c0 .78.46 1.23 1.21 1.23" />
  </svg>
);
export default SvgCarseatleft1FillBold;
