import * as React from "react";
const SvgWalletpassfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112 25.792h12.55c2.66 0 4.12-1.46 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14h-2.67c-.56 0-.87.42-.87.92v.24c0 1.56-1.05 2.48-2.73 2.48s-2.74-.92-2.74-2.48v-.24c0-.5-.3-.92-.87-.92h-2.67c-2.66 0-4.11 1.46-4.11 4.14v17.51c0 2.68 1.45 4.14 4.11 4.14m2.18-16.37c-.47 0-.82-.35-.82-.81 0-.44.35-.78.82-.78h8.19c.46 0 .81.34.81.78 0 .46-.35.81-.81.81Zm0 4.11c-.47 0-.82-.34-.82-.78 0-.46.35-.81.82-.81h4.13c.45 0 .8.35.8.81 0 .44-.35.78-.8.78Z" />
  </svg>
);
export default SvgWalletpassfillBold;
