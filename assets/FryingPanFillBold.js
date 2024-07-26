import * as React from "react";
const SvgFryingpanfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 11.714c0 6.67 6.24 11.12 15.6 11.12 9.37 0 15.62-4.44 15.62-11.12 0-.68-.33-1.33-.94-1.9l6.41-4.34c3.35-2.26-.05-7.7-4.34-4.48l-8.27 6.21c-2.39-.5-5.27-.77-8.48-.77-9.13 0-15.6 2.25-15.6 5.28m2.73 0c0-1.15 6.84-2.69 12.87-2.69s12.87 1.53 12.87 2.69c0 .75-2.96 1.66-6.8 2.18-.46-2.04-2.34-3.4-4.59-3.4-1.5 0-2.89.63-3.77 1.67-.36-.1-.7-.14-1.1-.14-1.45 0-2.74.71-3.4 1.76-3.49-.53-6.08-1.38-6.08-2.07" />
  </svg>
);
export default SvgFryingpanfillBold;
