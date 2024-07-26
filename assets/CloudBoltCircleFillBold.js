import * as React from "react";
const SvgCloudboltcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-3.65-11.37c-1.68 0-2.75-1.09-2.75-2.52 0-1.18.73-2.06 1.8-2.43a4.077 4.077 0 0 1 4.08-3.62c1.62 0 2.87.8 3.58 2.17 1.9 0 3.35 1.37 3.35 3.21 0 1.78-1.42 3.19-3.27 3.19Zm1.3 3.61 1.05-2.43c.06-.15.15-.22.37-.22h1.98c.17 0 .23.13.16.28l-.67 1.27h1.64c.24 0 .3.22.13.38l-3.82 3.55c-.07.1-.16.11-.23.09-.06-.04-.1-.13-.04-.23l.97-2.39h-1.36c-.21 0-.26-.13-.18-.3" />
  </svg>
);
export default SvgCloudboltcirclefillBold;
