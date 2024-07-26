import * as React from "react";
const SvgL1CirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m3.32-7.68c-.56 0-1.01-.45-1.01-1.01v-6.35l-.82.65c-.15.12-.29.18-.49.18-.35 0-.67-.25-.67-.72 0-.32.15-.57.43-.78l1.08-.83c.35-.27.76-.53 1.3-.53.73 0 1.19.4 1.19 1.12v7.26c0 .56-.46 1.01-1.01 1.01m-6.86-.12c-.64 0-.99-.4-.99-1.04v-7.22c0-.55.45-1 1.01-1 .55 0 .99.45.99 1v6.62h1.96c.44 0 .82.36.82.82 0 .44-.38.82-.82.82Z" />
  </svg>
);
export default SvgL1CirclefillBold;
