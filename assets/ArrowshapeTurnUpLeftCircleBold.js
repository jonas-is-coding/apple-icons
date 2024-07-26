import * as React from "react";
const SvgArrowshapeturnupleftcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-.9-4.28c.55 0 .96-.42.96-.97v-1.96h.11c2.01 0 3.17.73 3.97 2.2.28.5.6.66 1 .66.55 0 .92-.55.92-1.62 0-4.25-1.98-6.77-5.89-6.77h-.11v-1.97c0-.55-.41-.98-.97-.98-.35 0-.61.14-1 .49l-4.78 4.43c-.24.23-.35.52-.35.79 0 .24.11.56.35.78l4.78 4.44c.35.33.64.48 1.01.48" />
  </svg>
);
export default SvgArrowshapeturnupleftcircleBold;
