import * as React from "react";
const SvgArrowuturnrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 14.84c0 5.01 3.29 8.25 8.51 8.25h3c.98 0 1.72-.75 1.72-1.7 0-.94-.73-1.69-1.72-1.69h-2.78c-3.39 0-5.4-2.06-5.4-4.93 0-2.88 2.01-4.9 5.4-4.9h6.42l2.65-.12-1.78 1.46-2.37 2.3c-.32.31-.53.68-.53 1.21 0 .92.66 1.62 1.64 1.62.44 0 .88-.19 1.22-.53l6.47-6.39c.32-.31.51-.78.51-1.25 0-.46-.19-.94-.51-1.26L15.982.53c-.34-.34-.78-.53-1.22-.53-.98 0-1.64.69-1.64 1.62 0 .52.21.9.53 1.2l2.37 2.31 1.78 1.47-2.65-.13h-6.54c-5.27 0-8.61 3.41-8.61 8.37" />
  </svg>
);
export default SvgArrowuturnrightBold;
