import * as React from "react";
const SvgArrowupforwardandarrowdownbackwardsquareBold = ({
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
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm11.75-8.19a1.005 1.005 0 0 0 0-2.01h-.38l-1.34.17 2.5-2.32c.46-.42.45-1.16.01-1.62-.45-.43-1.19-.45-1.61.01l-2.35 2.51.18-1.35v-.4c0-.55-.46-.99-1.01-.99s-1 .44-1 .99v3.71c0 .86.46 1.3 1.32 1.3Zm-6.02 6.01c.55 0 1.01-.43 1.01-1v-3.69c0-.87-.47-1.31-1.31-1.31h-3.69c-.55 0-1 .46-1 1.01s.45.99 1 .99h.38l1.33-.16-2.5 2.33c-.45.41-.44 1.16 0 1.61.45.44 1.19.45 1.61-.02l2.34-2.49-.16 1.33v.4c0 .57.44 1 .99 1" />
  </svg>
);
export default SvgArrowupforwardandarrowdownbackwardsquareBold;
