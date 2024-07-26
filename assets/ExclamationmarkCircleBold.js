import * as React from "react";
const SvgExclamationmarkcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-7.62c.76 0 1.21-.42 1.24-1.23l.19-4.82c.04-.82-.57-1.4-1.44-1.4-.88 0-1.48.56-1.44 1.4l.19 4.85c.03.77.48 1.2 1.26 1.2m0 4.01c.88 0 1.56-.55 1.56-1.4 0-.84-.68-1.4-1.56-1.4s-1.57.56-1.57 1.4.69 1.4 1.57 1.4" />
  </svg>
);
export default SvgExclamationmarkcircleBold;
