import * as React from "react";
const SvgArrowupandpersonrectangleportraitBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.392 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14h-12.55c-2.66 0-4.11 1.46-4.11 4.14Zm3.02-.32V4.472c0-.94.46-1.45 1.47-1.45h11.81c1 0 1.45.51 1.45 1.45v16.86c0 .93-.45 1.44-1.45 1.44h-11.81c-1.01 0-1.47-.51-1.47-1.44m7.37-8.91c1.61.01 2.91-1.36 2.91-3.18 0-1.69-1.3-3.1-2.91-3.1s-2.91 1.41-2.91 3.1c0 1.82 1.3 3.18 2.91 3.18m-21.44-1.17c-.7.8-.26 1.87.8 1.87h2v4.33c0 .72.6 1.26 1.35 1.26s1.33-.54 1.33-1.26v-4.33h1.98c1.1 0 1.53-1.07.82-1.87l-3.36-3.81c-.45-.52-1.12-.52-1.58 0Zm16.55 7.37h9.78c.59 0 .88-.41.88-.94 0-1.24-1.78-4.39-5.77-4.39s-5.77 3.15-5.77 4.39c0 .53.29.94.88.94" />
  </svg>
);
export default SvgArrowupandpersonrectangleportraitBold;
