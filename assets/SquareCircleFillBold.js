import * as React from "react";
const SvgSquarecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.747c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.547.002 12.377s5.54 12.37 12.37 12.37m-4.06-6.42c-1.13 0-1.88-.8-1.88-1.98v-8.07c0-1.12.75-1.86 1.88-1.86h8.15c1.21 0 1.88.66 1.88 1.86v8.07c0 1.27-.67 1.98-1.88 1.98Zm1.04-2.46h6.06c.28 0 .47-.19.47-.47v-6.05c0-.28-.19-.46-.47-.46h-6.06c-.27 0-.47.18-.47.46v6.05c0 .28.2.47.47.47" />
  </svg>
);
export default SvgSquarecirclefillBold;
