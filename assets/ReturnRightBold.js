import * as React from "react";
const SvgReturnrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.402 22.895c.43 0 .88-.18 1.22-.52l6.46-6.39c.32-.32.51-.8.51-1.25 0-.47-.19-.94-.51-1.26l-6.46-6.39c-.34-.33-.79-.52-1.22-.52-.99 0-1.66.69-1.66 1.61 0 .53.23.91.54 1.21l2.37 2.3 1.77 1.46-2.64-.11H4.862c-1.08 0-1.53-.46-1.53-1.55v-6.55c0-1.09.44-1.54 1.53-1.54h6.25c.99 0 1.72-.76 1.72-1.7 0-.93-.73-1.69-1.72-1.69h-6.4c-3.27 0-4.71 1.44-4.71 4.71v6.98c0 3.29 1.44 4.73 4.71 4.73h14.07l2.64-.12-1.77 1.46-2.37 2.31c-.31.3-.54.68-.54 1.21 0 .92.67 1.61 1.66 1.61" />
  </svg>
);
export default SvgReturnrightBold;
