import * as React from "react";
const SvgLtcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.97-7.8c-.63 0-.98-.4-.98-1.04v-7.22c0-.55.44-1 1-1a1 1 0 0 1 .99 1v6.62h1.97c.43 0 .82.36.82.81s-.39.83-.82.83Zm6.52.13a.995.995 0 0 1-1.01-1.01v-6.61h-1.1c-.45 0-.81-.36-.81-.82 0-.43.36-.81.81-.81h4.17c.44 0 .81.38.81.81 0 .46-.37.82-.81.82h-1.08v6.61c0 .57-.43 1.01-.98 1.01" />
  </svg>
);
export default SvgLtcirclefillBold;
