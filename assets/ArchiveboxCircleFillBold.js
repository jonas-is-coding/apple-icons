import * as React from "react";
const SvgArchiveboxcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.19-14.88c-.81 0-1.22-.44-1.22-1.24v-.6c0-.8.44-1.25 1.22-1.25h10.4c.8 0 1.21.45 1.21 1.25v.6c0 .8-.41 1.24-1.21 1.24Zm1.84 8.54c-1.33 0-2.1-.73-2.1-2.09v-5.39h10.9v5.39c0 1.36-.76 2.09-2.1 2.09Zm1.47-4.82h3.78c.34 0 .6-.25.6-.6v-.19c0-.36-.26-.59-.6-.59h-3.78c-.34 0-.6.23-.6.59v.19c0 .35.26.6.6.6" />
  </svg>
);
export default SvgArchiveboxcirclefillBold;
