import * as React from "react";
const SvgRestartcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.33-10.73c-1.12.65-1.05 2.24.01 2.88l6.75 4.01c1.08.64 2.55.24 2.55-1.29v-8.33c0-1.53-1.47-1.94-2.55-1.29Zm2.77 1.29 3.8-2.25c.12-.07.22-.03.22.09v4.61c0 .11-.1.16-.22.09l-3.79-2.24c-.14-.07-.13-.23-.01-.3" />
  </svg>
);
export default SvgRestartcircleBold;
