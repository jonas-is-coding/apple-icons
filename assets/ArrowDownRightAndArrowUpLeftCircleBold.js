import * as React from "react";
const SvgArrowdownrightandarrowupleftcircleBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.01-9.3h3.69c.84 0 1.31-.44 1.31-1.3v-3.71c0-.55-.46-.99-1.01-.99s-.99.44-.99.99v.4l.16 1.35-2.34-2.51c-.42-.46-1.16-.44-1.61-.01-.44.46-.46 1.2 0 1.62l2.5 2.32-1.33-.17h-.38a1.005 1.005 0 0 0 0 2.01m6.01 6.01c.55 0 1.01-.43 1.01-1v-.4l-.18-1.33 2.34 2.49c.43.47 1.16.46 1.62.02.44-.45.45-1.2-.01-1.61l-2.5-2.33 1.34.16h.37c.56 0 1.01-.44 1.01-.99s-.45-1.01-1.01-1.01h-3.67c-.86 0-1.32.44-1.32 1.31v3.69c0 .57.45 1 1 1" />
  </svg>
);
export default SvgArrowdownrightandarrowupleftcircleBold;
