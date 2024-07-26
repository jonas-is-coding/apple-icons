import * as React from "react";
const SvgRefrigeratorBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.222 27.993h12.25c1.91 0 3.22-1.34 3.22-3.3V3.303c0-1.96-1.31-3.3-3.22-3.3H3.222c-1.91 0-3.22 1.34-3.22 3.3v21.39c0 1.96 1.31 3.3 3.22 3.3m-.4-24.47c0-.42.28-.71.71-.71h11.69c.39 0 .65.26.65.64v6.37H2.822Zm2.33 4.84c.46 0 .8-.34.8-.8v-2.68c0-.45-.34-.79-.8-.79s-.79.34-.79.79v2.68c0 .46.33.8.79.8m-2.33 13.36v-10.1h13.05v10.1Zm2.33-4.9c.46 0 .8-.32.8-.79v-2.67c0-.47-.34-.8-.8-.8s-.79.33-.79.8v2.67c0 .47.33.79.79.79m-1.62 8.35c-.43 0-.71-.28-.71-.72v-.92h13.05v.99c0 .39-.26.65-.65.65Z" />
  </svg>
);
export default SvgRefrigeratorBold;
