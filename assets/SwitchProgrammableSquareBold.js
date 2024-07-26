import * as React from "react";
const SvgSwitchprogrammablesquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm3.86-2.13h5.76c.63 0 1.06-.45 1.06-1.06v-9.96c0-.62-.43-1.04-1.06-1.04h-5.76c-.62 0-1.06.42-1.06 1.04v9.96c0 .61.44 1.06 1.06 1.06m.83-7.18c-.28 0-.46-.2-.46-.48v-2.52c0-.28.18-.46.46-.46h4.1c.28 0 .46.18.46.46v2.52c0 .28-.18.48-.46.48Zm0 5.75c-.28 0-.46-.18-.46-.47v-2.52c0-.28.18-.47.46-.47h4.1c.28 0 .46.19.46.47v2.52c0 .29-.18.47-.46.47Z" />
  </svg>
);
export default SvgSwitchprogrammablesquareBold;
