import * as React from "react";
const SvgArrowtriangleuparrowtriangledownwindowleftBold = ({
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
    <path d="M22.012 22.347c2.68 0 4.13-1.44 4.13-4.11v-5.53c0-1.88-.54-2.98-2.08-4.14l-9.16-6.87c-1.67-1.24-3-1.7-5.07-1.7h-5.74c-2.64 0-4.09 1.44-4.09 4.07v14.17c0 2.67 1.44 4.11 4.14 4.11Zm-1.27-11.23H4.422c-.89 0-1.4-.56-1.4-1.4v-5.29c0-.95.49-1.4 1.4-1.4h5.69c1.17 0 1.86.21 2.7.86l8.2 6.18c.49.36.33 1.05-.27 1.05m-14.48-1.52h4.55c.68 0 .98-.6.63-1.16l-2.22-3.69c-.33-.55-1.03-.54-1.36 0l-2.22 3.69c-.36.57-.05 1.16.62 1.16m-.04 3.56h4.63c.69 0 1 .61.63 1.2l-2.25 3.75c-.34.56-1.05.55-1.38 0l-2.27-3.75c-.36-.6-.04-1.2.64-1.2" />
  </svg>
);
export default SvgArrowtriangleuparrowtriangledownwindowleftBold;
