import * as React from "react";
const SvgLockopeniphoneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 23.541c0 2.13 1.48 3.55 3.69 3.55h10.15c2.13 0 3.55-1.42 3.55-3.55V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56Zm3.02-.92V4.491c0-.82.49-1.28 1.33-1.28h8.69c.83 0 1.33.47 1.33 1.29v18.1c0 .82-.5 1.29-1.33 1.29h-8.69c-.84 0-1.33-.45-1.33-1.27m1.58-6.05c0 .71.32 1.05.99 1.05h4.09c.67 0 .98-.34.98-1.05v-3.11c0-.65-.27-.99-.83-1.04v-.85c0-.79.4-1.28 1.14-1.28s1.13.49 1.13 1.28v.63c0 .38.31.68.68.68s.67-.3.67-.68v-.63c0-1.53-.96-2.61-2.48-2.61-1.53 0-2.5 1.08-2.5 2.68v.78h-2.88c-.67 0-.99.34-.99 1.04Z" />
  </svg>
);
export default SvgLockopeniphoneBold;
