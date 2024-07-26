import * as React from "react";
const SvgExclamationmarkcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m.01-10.61c-.83 0-1.31-.46-1.34-1.29l-.19-5.06c-.05-.9.59-1.49 1.52-1.49s1.57.61 1.53 1.49l-.19 5.05c-.05.84-.52 1.3-1.33 1.3m0 4.23c-.93 0-1.66-.59-1.66-1.49 0-.88.73-1.48 1.66-1.48.94 0 1.65.6 1.65 1.48 0 .9-.72 1.49-1.65 1.49" />
  </svg>
);
export default SvgExclamationmarkcirclefillBold;
