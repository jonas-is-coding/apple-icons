import * as React from "react";
const SvgArrowdownleftandarrowuprightsquareBold = ({
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
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm11.62-7.98c.55 0 .99-.44.99-1v-3.76c0-.87-.45-1.31-1.31-1.31h-3.75c-.55 0-1.01.45-1.01 1.01s.46.99 1.01.99h.45l1.32-.16-2.13 1.98c-.47.42-.46 1.16-.01 1.6.44.45 1.18.47 1.6-.01l2-2.14-.17 1.33v.47c0 .56.44 1 1.01 1m-5.71 5.69c.55 0 1-.45 1-1 0-.56-.45-1-1-1h-.45l-1.33.16 2.14-1.98c.47-.42.45-1.16.01-1.6-.44-.45-1.18-.46-1.6.01l-2 2.16.17-1.35v-.47c0-.55-.46-1-1.01-1s-.99.45-.99 1v3.76c0 .88.45 1.31 1.31 1.31Z" />
  </svg>
);
export default SvgArrowdownleftandarrowuprightsquareBold;
