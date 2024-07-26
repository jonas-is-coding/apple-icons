import * as React from "react";
const SvgCubefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m12.312 12.832 11.43-6.57c-.2-.21-.43-.41-.69-.55l-9.09-5.26c-1.04-.6-2.22-.6-3.25 0l-9.09 5.26c-.27.15-.52.35-.73.56Zm1.12 1.85v12.65c.19-.07.36-.15.55-.27l9.09-5.25c.99-.57 1.6-1.63 1.6-2.8V8.642c0-.13-.03-.27-.04-.4Zm-2.17.04L.022 8.272c-.01.13-.02.26-.02.38v10.36c0 1.18.61 2.23 1.62 2.8l9.09 5.26c.18.11.36.2.55.27Z" />
  </svg>
);
export default SvgCubefillBold;
