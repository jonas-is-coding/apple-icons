import * as React from "react";
const SvgPedalclutchfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.986 26.18h11.05c2.54 0 4.06-1.51 4.06-4.05l.02-16.39c0-2.4-1.46-4.08-4.02-4.7-2.84-.68-5.75-1-8.85-1.04-4.6-.06-7.2 1.66-7.74 5.65-.64 4.82-.68 11.39-.09 15.75.39 2.92 2.53 4.78 5.57 4.78m-.16-15.49c-.55 0-.98-.45-.98-1 0-.56.43-.99.98-.99h9.72a.99.99 0 0 1 1.01.99c0 .55-.45 1-1.01 1Zm0 4.23c-.55 0-.98-.45-.98-.99 0-.56.43-.99.98-.99h9.72a.99.99 0 0 1 1.01.99c0 .54-.45.99-1.01.99Zm0 4.24c-.55 0-.98-.43-.98-1 0-.55.43-.99.98-.99h9.72c.56 0 1.01.44 1.01.99 0 .57-.45 1-1.01 1Z" />
  </svg>
);
export default SvgPedalclutchfillBold;
