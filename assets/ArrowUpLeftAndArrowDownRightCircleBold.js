import * as React from "react";
const SvgArrowupleftandarrowdownrightcircleBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.91-9.09c.55 0 1.01-.44 1.01-1v-.47l-.18-1.33 2.01 2.14c.42.48 1.16.46 1.6.01.44-.44.46-1.18-.01-1.6l-2.13-1.98 1.32.16h.45c.55 0 1-.43 1-.99s-.45-1.01-1-1.01h-3.75c-.86 0-1.31.44-1.31 1.31v3.76c0 .56.44 1 .99 1m5.71 5.69h3.75c.86 0 1.31-.43 1.31-1.31v-3.76c0-.55-.44-1-.99-1-.57 0-1.01.45-1.01 1v.47l.17 1.35-2-2.16c-.42-.47-1.16-.46-1.61-.01-.44.44-.45 1.18.02 1.6l2.13 1.98-1.33-.16h-.44c-.55 0-1.01.44-1.01 1 0 .55.46 1 1.01 1" />
  </svg>
);
export default SvgArrowupleftandarrowdownrightcircleBold;
