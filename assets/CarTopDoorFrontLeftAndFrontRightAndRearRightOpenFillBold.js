import * as React from "react";
const SvgCartopdoorfrontleftandfrontrightandrearrightopenfillBold = ({
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
    <path d="M14.524 31.533c6.21 0 8.95-1.54 8.95-5.13v-4.39l3.25 3.24c.54.54 1.42.53 1.94-.01.52-.53.53-1.41 0-1.93l-5.19-5.17v-5.05l3.25 3.25c.54.54 1.42.53 1.94-.01.52-.52.53-1.4 0-1.93l-5.19-5.18v-3.25c0-3.85-3.18-5.97-8.95-5.97-5.75 0-8.94 2.13-8.94 5.97v3.25l-5.19 5.18a1.38 1.38 0 0 0 0 1.93c.52.54 1.4.55 1.94.01l3.25-3.25v13.31c0 3.59 2.74 5.13 8.94 5.13m.01-18.28c-1.23 0-2.96.11-3.43.11-.95 0-1.35-.37-1.43-1.33l-.2-2.39c-.17-1.8 1.16-2.51 5.06-2.51s5.23.71 5.06 2.51l-.2 2.39c-.08.96-.48 1.33-1.41 1.33-.48 0-2.25-.11-3.45-.11m0 13.22c-4.02 0-5.3-.62-5.03-2.47l.17-1.14c.21-1.49 1.45-1.99 4.86-1.99s4.65.5 4.86 1.99l.17 1.14c.28 1.85-1.01 2.47-5.03 2.47" />
  </svg>
);
export default SvgCartopdoorfrontleftandfrontrightandrearrightopenfillBold;
