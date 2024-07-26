import * as React from "react";
const SvgArrowupandpersonrectangleturnleftBold = ({
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
    <path d="M11.392 21.652c0 2.69 1.45 4.14 4.1 4.14h12.56c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14h-12.56c-2.65 0-4.1 1.46-4.1 4.14Zm3.02-.32V4.472c0-.94.46-1.45 1.46-1.45h11.81c.99 0 1.46.51 1.46 1.45v16.86c0 .93-.47 1.44-1.46 1.44h-11.81c-1 0-1.46-.51-1.46-1.44m12.66-3.18c.53 0 .95-.29.95-.88v-9.78c0-.59-.42-.88-.95-.88-1.24 0-4.4 1.78-4.4 5.78 0 3.98 3.16 5.76 4.4 5.76m-26.73-6.9c-.7.8-.26 1.87.8 1.87h2v4.33c0 .72.6 1.26 1.35 1.26s1.33-.54 1.33-1.26v-4.33h1.98c1.1 0 1.53-1.07.82-1.87l-3.36-3.81c-.45-.52-1.12-.52-1.58 0Zm18.29 4.04c1.82 0 3.19-1.3 3.19-2.9-.01-1.62-1.37-2.92-3.19-2.92-1.7 0-3.1 1.3-3.1 2.92 0 1.6 1.4 2.9 3.1 2.9" />
  </svg>
);
export default SvgArrowupandpersonrectangleturnleftBold;
