import * as React from "react";
const SvgPedalacceleratorfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.452 26.203h9.89c2.56 0 4.07-1.51 4.07-4.05l.02-18.09c0-2.48-1.57-4.06-4.06-4.06H5.562c-3.49 0-5.56 2.08-5.56 5.58v2.4c0 3.35.8 5.33 2.62 7.7l.77.98v5.49c0 2.54 1.52 4.05 4.06 4.05m-1.57-18.27c-.55 0-.99-.43-.99-.98s.44-1 .99-1h10.08c.56 0 1 .45 1 1s-.44.98-1 .98Zm1.15 4.4c-.55 0-1-.44-1-1s.45-1 1-1h8.93c.56 0 1 .44 1 1s-.44 1-1 1Zm1.97 4.37c-.56 0-1-.44-1-.99 0-.56.44-1.01 1-1.01h6.96c.56 0 1 .45 1 1.01 0 .55-.44.99-1 .99Zm0 4.38c-.56 0-1-.43-1-1 0-.55.44-.99 1-.99h6.96c.56 0 1 .44 1 .99 0 .57-.44 1-1 1Z" />
  </svg>
);
export default SvgPedalacceleratorfillBold;
